// vite.config.ts
import { defineConfig } from "file:///sessions/compassionate-wizardly-planck/mnt/Component%20workflow/node_modules/vite/dist/node/index.js";
import react from "file:///sessions/compassionate-wizardly-planck/mnt/Component%20workflow/node_modules/@vitejs/plugin-react/dist/index.js";

// scripts/vite-plugin-precompile.ts
import * as babel from "file:///sessions/compassionate-wizardly-planck/mnt/Component%20workflow/node_modules/@babel/core/lib/index.js";
function precompileRegistryPlugin() {
  return {
    name: "vite-plugin-precompile-registry",
    enforce: "pre",
    async transform(code, id) {
      if (!id.includes("/src/data/registry/") || !id.endsWith(".ts")) {
        return null;
      }
      const ast = babel.parse(code, {
        filename: id,
        presets: ["@babel/preset-typescript"]
      });
      if (!ast) return null;
      let hasModifications = false;
      babel.traverse(ast, {
        ObjectExpression(path) {
          const codeProp = path.node.properties.find(
            (prop) => prop.type === "ObjectProperty" && prop.key.type === "Identifier" && prop.key.name === "code"
          );
          if (codeProp && codeProp.type === "ObjectProperty") {
            let rawCode = "";
            if (codeProp.value.type === "StringLiteral") {
              rawCode = codeProp.value.value;
            } else if (codeProp.value.type === "TemplateLiteral") {
              rawCode = codeProp.value.quasis.map((q) => q.value.cooked ?? q.value.raw).join("");
            }
            if (rawCode) {
              try {
                const compiled = babel.transformSync(rawCode, {
                  presets: [
                    ["@babel/preset-react", { runtime: "classic" }]
                  ],
                  filename: "component.tsx",
                  sourceType: "module"
                });
                if (compiled?.code) {
                  const compiledProp = babel.types.objectProperty(
                    babel.types.identifier("compiledCode"),
                    babel.types.stringLiteral(compiled.code)
                  );
                  path.node.properties.push(compiledProp);
                  hasModifications = true;
                }
              } catch (e) {
                console.error(`Error compiling code in ${id}:`, e);
              }
            }
          }
        }
      });
      if (!hasModifications) {
        return null;
      }
      const output = babel.transformFromAstSync(ast, code, {
        filename: id,
        presets: ["@babel/preset-typescript"]
      });
      return {
        code: output?.code || code,
        map: output?.map
      };
    }
  };
}

// vite.config.ts
var vite_config_default = defineConfig({
  plugins: [react(), precompileRegistryPlugin()],
  server: { port: 5173, host: true }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic2NyaXB0cy92aXRlLXBsdWdpbi1wcmVjb21waWxlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL3Nlc3Npb25zL2NvbXBhc3Npb25hdGUtd2l6YXJkbHktcGxhbmNrL21udC9Db21wb25lbnQgd29ya2Zsb3dcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9zZXNzaW9ucy9jb21wYXNzaW9uYXRlLXdpemFyZGx5LXBsYW5jay9tbnQvQ29tcG9uZW50IHdvcmtmbG93L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9zZXNzaW9ucy9jb21wYXNzaW9uYXRlLXdpemFyZGx5LXBsYW5jay9tbnQvQ29tcG9uZW50JTIwd29ya2Zsb3cvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHsgcHJlY29tcGlsZVJlZ2lzdHJ5UGx1Z2luIH0gZnJvbSBcIi4vc2NyaXB0cy92aXRlLXBsdWdpbi1wcmVjb21waWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBwcmVjb21waWxlUmVnaXN0cnlQbHVnaW4oKV0sXG4gIHNlcnZlcjogeyBwb3J0OiA1MTczLCBob3N0OiB0cnVlIH0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL3Nlc3Npb25zL2NvbXBhc3Npb25hdGUtd2l6YXJkbHktcGxhbmNrL21udC9Db21wb25lbnQgd29ya2Zsb3cvc2NyaXB0c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL3Nlc3Npb25zL2NvbXBhc3Npb25hdGUtd2l6YXJkbHktcGxhbmNrL21udC9Db21wb25lbnQgd29ya2Zsb3cvc2NyaXB0cy92aXRlLXBsdWdpbi1wcmVjb21waWxlLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9zZXNzaW9ucy9jb21wYXNzaW9uYXRlLXdpemFyZGx5LXBsYW5jay9tbnQvQ29tcG9uZW50JTIwd29ya2Zsb3cvc2NyaXB0cy92aXRlLXBsdWdpbi1wcmVjb21waWxlLnRzXCI7aW1wb3J0IHR5cGUgeyBQbHVnaW4gfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0ICogYXMgYmFiZWwgZnJvbSBcIkBiYWJlbC9jb3JlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVjb21waWxlUmVnaXN0cnlQbHVnaW4oKTogUGx1Z2luIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBcInZpdGUtcGx1Z2luLXByZWNvbXBpbGUtcmVnaXN0cnlcIixcbiAgICBlbmZvcmNlOiBcInByZVwiLFxuICAgIGFzeW5jIHRyYW5zZm9ybShjb2RlLCBpZCkge1xuICAgICAgLy8gT25seSBwcm9jZXNzIGZpbGVzIGluIHNyYy9kYXRhL3JlZ2lzdHJ5LyB0aGF0IGFyZSBUUy9KU1xuICAgICAgaWYgKCFpZC5pbmNsdWRlcyhcIi9zcmMvZGF0YS9yZWdpc3RyeS9cIikgfHwgIWlkLmVuZHNXaXRoKFwiLnRzXCIpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBXZSB3aWxsIHBhcnNlIHRoZSBmaWxlIHVzaW5nIEJhYmVsLCBmaW5kICdjb2RlOiBcIi4uLlwiJyBvciAnY29kZTogYC4uLmAnLFxuICAgICAgLy8gY29tcGlsZSB0aGUgc3RyaW5nLCBhbmQgaW5qZWN0ICdjb21waWxlZENvZGU6IFwiLi4uXCInIGludG8gdGhlIG9iamVjdC5cbiAgICAgIFxuICAgICAgY29uc3QgYXN0ID0gYmFiZWwucGFyc2UoY29kZSwge1xuICAgICAgICBmaWxlbmFtZTogaWQsXG4gICAgICAgIHByZXNldHM6IFtcIkBiYWJlbC9wcmVzZXQtdHlwZXNjcmlwdFwiXSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIWFzdCkgcmV0dXJuIG51bGw7XG5cbiAgICAgIGxldCBoYXNNb2RpZmljYXRpb25zID0gZmFsc2U7XG5cbiAgICAgIGJhYmVsLnRyYXZlcnNlKGFzdCwge1xuICAgICAgICBPYmplY3RFeHByZXNzaW9uKHBhdGgpIHtcbiAgICAgICAgICAvLyBMb29rIGZvciBhbiBvYmplY3QgcHJvcGVydHkgbmFtZWQgJ2NvZGUnXG4gICAgICAgICAgY29uc3QgY29kZVByb3AgPSBwYXRoLm5vZGUucHJvcGVydGllcy5maW5kKFxuICAgICAgICAgICAgKHByb3ApID0+XG4gICAgICAgICAgICAgIHByb3AudHlwZSA9PT0gXCJPYmplY3RQcm9wZXJ0eVwiICYmXG4gICAgICAgICAgICAgIHByb3Aua2V5LnR5cGUgPT09IFwiSWRlbnRpZmllclwiICYmXG4gICAgICAgICAgICAgIHByb3Aua2V5Lm5hbWUgPT09IFwiY29kZVwiXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmIChjb2RlUHJvcCAmJiBjb2RlUHJvcC50eXBlID09PSBcIk9iamVjdFByb3BlcnR5XCIpIHtcbiAgICAgICAgICAgIGxldCByYXdDb2RlID0gXCJcIjtcbiAgICAgICAgICAgIGlmIChjb2RlUHJvcC52YWx1ZS50eXBlID09PSBcIlN0cmluZ0xpdGVyYWxcIikge1xuICAgICAgICAgICAgICByYXdDb2RlID0gY29kZVByb3AudmFsdWUudmFsdWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvZGVQcm9wLnZhbHVlLnR5cGUgPT09IFwiVGVtcGxhdGVMaXRlcmFsXCIpIHtcbiAgICAgICAgICAgICAgLy8gVXNlIGNvb2tlZCAobm90IHJhdykgc28gSlMgZXNjYXBlIHNlcXVlbmNlcyBsaWtlIFxcYCBhbmQgXFwkeyBhcmVcbiAgICAgICAgICAgICAgLy8gcmVzb2x2ZWQgdG8gdGhlaXIgbGl0ZXJhbCBmb3JtIGJlZm9yZSB3ZSByZS1jb21waWxlIHRocm91Z2ggQmFiZWwuXG4gICAgICAgICAgICAgIC8vIFVzaW5nIGByYXdgIHByZXNlcnZlZCBiYWNrc2xhc2hlcyBhbmQgY2F1c2VkIE1pc3NpbmdVbmljb2RlRXNjYXBlXG4gICAgICAgICAgICAgIC8vIGVycm9ycyBvbiBldmVyeSB2YXJpYW50IGNvbnRhaW5pbmcgYSBuZXN0ZWQgY2xhc3NOYW1lIHRlbXBsYXRlIGxpdGVyYWwuXG4gICAgICAgICAgICAgIHJhd0NvZGUgPSBjb2RlUHJvcC52YWx1ZS5xdWFzaXNcbiAgICAgICAgICAgICAgICAubWFwKChxKSA9PiBxLnZhbHVlLmNvb2tlZCA/PyBxLnZhbHVlLnJhdylcbiAgICAgICAgICAgICAgICAuam9pbihcIlwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJhd0NvZGUpIHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBDb21waWxlIHRoZSBSZWFjdCBKU1ggY29kZSB1c2luZyBiYWJlbFxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBpbGVkID0gYmFiZWwudHJhbnNmb3JtU3luYyhyYXdDb2RlLCB7XG4gICAgICAgICAgICAgICAgICBwcmVzZXRzOiBbXG4gICAgICAgICAgICAgICAgICAgIFtcIkBiYWJlbC9wcmVzZXQtcmVhY3RcIiwgeyBydW50aW1lOiBcImNsYXNzaWNcIiB9XVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIGZpbGVuYW1lOiBcImNvbXBvbmVudC50c3hcIixcbiAgICAgICAgICAgICAgICAgIHNvdXJjZVR5cGU6IFwibW9kdWxlXCIsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY29tcGlsZWQ/LmNvZGUpIHtcbiAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyBwcm9wZXJ0eSAnY29tcGlsZWRDb2RlJ1xuICAgICAgICAgICAgICAgICAgY29uc3QgY29tcGlsZWRQcm9wID0gYmFiZWwudHlwZXMub2JqZWN0UHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgIGJhYmVsLnR5cGVzLmlkZW50aWZpZXIoXCJjb21waWxlZENvZGVcIiksXG4gICAgICAgICAgICAgICAgICAgIGJhYmVsLnR5cGVzLnN0cmluZ0xpdGVyYWwoY29tcGlsZWQuY29kZSlcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIC8vIEFwcGVuZCBpdCB0byB0aGUgb2JqZWN0XG4gICAgICAgICAgICAgICAgICBwYXRoLm5vZGUucHJvcGVydGllcy5wdXNoKGNvbXBpbGVkUHJvcCk7XG4gICAgICAgICAgICAgICAgICBoYXNNb2RpZmljYXRpb25zID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBjb21waWxpbmcgY29kZSBpbiAke2lkfTpgLCBlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIWhhc01vZGlmaWNhdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7IC8vIE5vIGNoYW5nZXNcbiAgICAgIH1cblxuICAgICAgY29uc3Qgb3V0cHV0ID0gYmFiZWwudHJhbnNmb3JtRnJvbUFzdFN5bmMoYXN0LCBjb2RlLCB7XG4gICAgICAgIGZpbGVuYW1lOiBpZCxcbiAgICAgICAgcHJlc2V0czogW1wiQGJhYmVsL3ByZXNldC10eXBlc2NyaXB0XCJdLFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvZGU6IG91dHB1dD8uY29kZSB8fCBjb2RlLFxuICAgICAgICBt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
