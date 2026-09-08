import type { Plugin } from "vite";
import * as babel from "@babel/core";

export function precompileRegistryPlugin(): Plugin {
  return {
    name: "vite-plugin-precompile-registry",
    enforce: "pre",
    async transform(code, id) {
      // Only process files in src/data/registry/ that are TS/JS
      if (!id.includes("/src/data/registry/") || !id.endsWith(".ts")) {
        return null;
      }

      // We will parse the file using Babel, find 'code: "..."' or 'code: `...`',
      // compile the string, and inject 'compiledCode: "..."' into the object.
      
      const ast = babel.parse(code, {
        filename: id,
        presets: ["@babel/preset-typescript"],
      });

      if (!ast) return null;

      let hasModifications = false;

      babel.traverse(ast, {
        ObjectExpression(path) {
          // Look for an object property named 'code'
          const codeProp = path.node.properties.find(
            (prop) =>
              prop.type === "ObjectProperty" &&
              prop.key.type === "Identifier" &&
              prop.key.name === "code"
          );

          if (codeProp && codeProp.type === "ObjectProperty") {
            let rawCode = "";
            if (codeProp.value.type === "StringLiteral") {
              rawCode = codeProp.value.value;
            } else if (codeProp.value.type === "TemplateLiteral") {
              // Use cooked (not raw) so JS escape sequences like \` and \${ are
              // resolved to their literal form before we re-compile through Babel.
              // Using `raw` preserved backslashes and caused MissingUnicodeEscape
              // errors on every variant containing a nested className template literal.
              rawCode = codeProp.value.quasis
                .map((q) => q.value.cooked ?? q.value.raw)
                .join("");
            }

            if (rawCode) {
              try {
                // Compile the TSX React code using babel. preset-typescript
                // must come first so TS-only syntax (as const, generics, type
                // annotations) is stripped before JSX is transformed.
                const compiled = babel.transformSync(rawCode, {
                  presets: [
                    ["@babel/preset-typescript", { allExtensions: true, isTSX: true }],
                    ["@babel/preset-react", { runtime: "classic" }],
                  ],
                  filename: "component.tsx",
                  sourceType: "module",
                });

                if (compiled?.code) {
                  // Create a new property 'compiledCode'
                  const compiledProp = babel.types.objectProperty(
                    babel.types.identifier("compiledCode"),
                    babel.types.stringLiteral(compiled.code)
                  );
                  
                  // Append it to the object
                  path.node.properties.push(compiledProp);
                  hasModifications = true;
                }
              } catch (e) {
                console.error(`Error compiling code in ${id}:`, e);
              }
            }
          }
        },
      });

      if (!hasModifications) {
        return null; // No changes
      }

      const output = babel.transformFromAstSync(ast, code, {
        filename: id,
        presets: ["@babel/preset-typescript"],
      });

      return {
        code: output?.code || code,
        map: output?.map,
      };
    },
  };
}
