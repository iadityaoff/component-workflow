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
              rawCode = codeProp.value.quasis.map((q) => q.value.raw).join("");
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic2NyaXB0cy92aXRlLXBsdWdpbi1wcmVjb21waWxlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL3Nlc3Npb25zL2NvbXBhc3Npb25hdGUtd2l6YXJkbHktcGxhbmNrL21udC9Db21wb25lbnQgd29ya2Zsb3dcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9zZXNzaW9ucy9jb21wYXNzaW9uYXRlLXdpemFyZGx5LXBsYW5jay9tbnQvQ29tcG9uZW50IHdvcmtmbG93L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9zZXNzaW9ucy9jb21wYXNzaW9uYXRlLXdpemFyZGx5LXBsYW5jay9tbnQvQ29tcG9uZW50JTIwd29ya2Zsb3cvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHsgcHJlY29tcGlsZVJlZ2lzdHJ5UGx1Z2luIH0gZnJvbSBcIi4vc2NyaXB0cy92aXRlLXBsdWdpbi1wcmVjb21waWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBwcmVjb21waWxlUmVnaXN0cnlQbHVnaW4oKV0sXG4gIHNlcnZlcjogeyBwb3J0OiA1MTczLCBob3N0OiB0cnVlIH0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL3Nlc3Npb25zL2NvbXBhc3Npb25hdGUtd2l6YXJkbHktcGxhbmNrL21udC9Db21wb25lbnQgd29ya2Zsb3cvc2NyaXB0c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL3Nlc3Npb25zL2NvbXBhc3Npb25hdGUtd2l6YXJkbHktcGxhbmNrL21udC9Db21wb25lbnQgd29ya2Zsb3cvc2NyaXB0cy92aXRlLXBsdWdpbi1wcmVjb21waWxlLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9zZXNzaW9ucy9jb21wYXNzaW9uYXRlLXdpemFyZGx5LXBsYW5jay9tbnQvQ29tcG9uZW50JTIwd29ya2Zsb3cvc2NyaXB0cy92aXRlLXBsdWdpbi1wcmVjb21waWxlLnRzXCI7aW1wb3J0IHR5cGUgeyBQbHVnaW4gfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0ICogYXMgYmFiZWwgZnJvbSBcIkBiYWJlbC9jb3JlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVjb21waWxlUmVnaXN0cnlQbHVnaW4oKTogUGx1Z2luIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBcInZpdGUtcGx1Z2luLXByZWNvbXBpbGUtcmVnaXN0cnlcIixcbiAgICBlbmZvcmNlOiBcInByZVwiLFxuICAgIGFzeW5jIHRyYW5zZm9ybShjb2RlLCBpZCkge1xuICAgICAgLy8gT25seSBwcm9jZXNzIGZpbGVzIGluIHNyYy9kYXRhL3JlZ2lzdHJ5LyB0aGF0IGFyZSBUUy9KU1xuICAgICAgaWYgKCFpZC5pbmNsdWRlcyhcIi9zcmMvZGF0YS9yZWdpc3RyeS9cIikgfHwgIWlkLmVuZHNXaXRoKFwiLnRzXCIpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBXZSB3aWxsIHBhcnNlIHRoZSBmaWxlIHVzaW5nIEJhYmVsLCBmaW5kICdjb2RlOiBcIi4uLlwiJyBvciAnY29kZTogYC4uLmAnLFxuICAgICAgLy8gY29tcGlsZSB0aGUgc3RyaW5nLCBhbmQgaW5qZWN0ICdjb21waWxlZENvZGU6IFwiLi4uXCInIGludG8gdGhlIG9iamVjdC5cbiAgICAgIFxuICAgICAgY29uc3QgYXN0ID0gYmFiZWwucGFyc2UoY29kZSwge1xuICAgICAgICBmaWxlbmFtZTogaWQsXG4gICAgICAgIHByZXNldHM6IFtcIkBiYWJlbC9wcmVzZXQtdHlwZXNjcmlwdFwiXSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIWFzdCkgcmV0dXJuIG51bGw7XG5cbiAgICAgIGxldCBoYXNNb2RpZmljYXRpb25zID0gZmFsc2U7XG5cbiAgICAgIGJhYmVsLnRyYXZlcnNlKGFzdCwge1xuICAgICAgICBPYmplY3RFeHByZXNzaW9uKHBhdGgpIHtcbiAgICAgICAgICAvLyBMb29rIGZvciBhbiBvYmplY3QgcHJvcGVydHkgbmFtZWQgJ2NvZGUnXG4gICAgICAgICAgY29uc3QgY29kZVByb3AgPSBwYXRoLm5vZGUucHJvcGVydGllcy5maW5kKFxuICAgICAgICAgICAgKHByb3ApID0+XG4gICAgICAgICAgICAgIHByb3AudHlwZSA9PT0gXCJPYmplY3RQcm9wZXJ0eVwiICYmXG4gICAgICAgICAgICAgIHByb3Aua2V5LnR5cGUgPT09IFwiSWRlbnRpZmllclwiICYmXG4gICAgICAgICAgICAgIHByb3Aua2V5Lm5hbWUgPT09IFwiY29kZVwiXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmIChjb2RlUHJvcCAmJiBjb2RlUHJvcC50eXBlID09PSBcIk9iamVjdFByb3BlcnR5XCIpIHtcbiAgICAgICAgICAgIGxldCByYXdDb2RlID0gXCJcIjtcbiAgICAgICAgICAgIGlmIChjb2RlUHJvcC52YWx1ZS50eXBlID09PSBcIlN0cmluZ0xpdGVyYWxcIikge1xuICAgICAgICAgICAgICByYXdDb2RlID0gY29kZVByb3AudmFsdWUudmFsdWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvZGVQcm9wLnZhbHVlLnR5cGUgPT09IFwiVGVtcGxhdGVMaXRlcmFsXCIpIHtcbiAgICAgICAgICAgICAgLy8gRXh0cmFjdCB0aGUgcmF3IHN0cmluZyBmcm9tIHRlbXBsYXRlIGxpdGVyYWwgKGFzc3VtaW5nIG5vIGNvbXBsZXggZXhwcmVzc2lvbnMgaW5zaWRlKVxuICAgICAgICAgICAgICByYXdDb2RlID0gY29kZVByb3AudmFsdWUucXVhc2lzLm1hcCgocSkgPT4gcS52YWx1ZS5yYXcpLmpvaW4oXCJcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyYXdDb2RlKSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gQ29tcGlsZSB0aGUgUmVhY3QgSlNYIGNvZGUgdXNpbmcgYmFiZWxcbiAgICAgICAgICAgICAgICBjb25zdCBjb21waWxlZCA9IGJhYmVsLnRyYW5zZm9ybVN5bmMocmF3Q29kZSwge1xuICAgICAgICAgICAgICAgICAgcHJlc2V0czogW1xuICAgICAgICAgICAgICAgICAgICBbXCJAYmFiZWwvcHJlc2V0LXJlYWN0XCIsIHsgcnVudGltZTogXCJjbGFzc2ljXCIgfV1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBmaWxlbmFtZTogXCJjb21wb25lbnQudHN4XCIsXG4gICAgICAgICAgICAgICAgICBzb3VyY2VUeXBlOiBcIm1vZHVsZVwiLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBpbGVkPy5jb2RlKSB7XG4gICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgcHJvcGVydHkgJ2NvbXBpbGVkQ29kZSdcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBpbGVkUHJvcCA9IGJhYmVsLnR5cGVzLm9iamVjdFByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICBiYWJlbC50eXBlcy5pZGVudGlmaWVyKFwiY29tcGlsZWRDb2RlXCIpLFxuICAgICAgICAgICAgICAgICAgICBiYWJlbC50eXBlcy5zdHJpbmdMaXRlcmFsKGNvbXBpbGVkLmNvZGUpXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAvLyBBcHBlbmQgaXQgdG8gdGhlIG9iamVjdFxuICAgICAgICAgICAgICAgICAgcGF0aC5ub2RlLnByb3BlcnRpZXMucHVzaChjb21waWxlZFByb3ApO1xuICAgICAgICAgICAgICAgICAgaGFzTW9kaWZpY2F0aW9ucyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgY29tcGlsaW5nIGNvZGUgaW4gJHtpZH06YCwgZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFoYXNNb2RpZmljYXRpb25zKSB7XG4gICAgICAgIHJldHVybiBudWxsOyAvLyBObyBjaGFuZ2VzXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG91dHB1dCA9IGJhYmVsLnRyYW5zZm9ybUZyb21Bc3RTeW5jKGFzdCwgY29kZSwge1xuICAgICAgICBmaWxlbmFtZTogaWQsXG4gICAgICAgIHByZXNldHM6IFtcIkBiYWJlbC9wcmVzZXQtdHlwZXNjcmlwdFwiXSxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb2RlOiBvdXRwdXQ/LmNvZGUgfHwgY29kZSxcbiAgICAgICAgbWFwOiBvdXRwdXQ/Lm1hcCxcbiAgICAgIH07XG4gICAgfSxcbiAgfTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBOFcsU0FBUyxvQkFBb0I7QUFDM1ksT0FBTyxXQUFXOzs7QUNBbEIsWUFBWSxXQUFXO0FBRWhCLFNBQVMsMkJBQW1DO0FBQ2pELFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULE1BQU0sVUFBVSxNQUFNLElBQUk7QUFFeEIsVUFBSSxDQUFDLEdBQUcsU0FBUyxxQkFBcUIsS0FBSyxDQUFDLEdBQUcsU0FBUyxLQUFLLEdBQUc7QUFDOUQsZUFBTztBQUFBLE1BQ1Q7QUFLQSxZQUFNLE1BQVksWUFBTSxNQUFNO0FBQUEsUUFDNUIsVUFBVTtBQUFBLFFBQ1YsU0FBUyxDQUFDLDBCQUEwQjtBQUFBLE1BQ3RDLENBQUM7QUFFRCxVQUFJLENBQUMsSUFBSyxRQUFPO0FBRWpCLFVBQUksbUJBQW1CO0FBRXZCLE1BQU0sZUFBUyxLQUFLO0FBQUEsUUFDbEIsaUJBQWlCLE1BQU07QUFFckIsZ0JBQU0sV0FBVyxLQUFLLEtBQUssV0FBVztBQUFBLFlBQ3BDLENBQUMsU0FDQyxLQUFLLFNBQVMsb0JBQ2QsS0FBSyxJQUFJLFNBQVMsZ0JBQ2xCLEtBQUssSUFBSSxTQUFTO0FBQUEsVUFDdEI7QUFFQSxjQUFJLFlBQVksU0FBUyxTQUFTLGtCQUFrQjtBQUNsRCxnQkFBSSxVQUFVO0FBQ2QsZ0JBQUksU0FBUyxNQUFNLFNBQVMsaUJBQWlCO0FBQzNDLHdCQUFVLFNBQVMsTUFBTTtBQUFBLFlBQzNCLFdBQVcsU0FBUyxNQUFNLFNBQVMsbUJBQW1CO0FBRXBELHdCQUFVLFNBQVMsTUFBTSxPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQUEsWUFDakU7QUFFQSxnQkFBSSxTQUFTO0FBQ1gsa0JBQUk7QUFFRixzQkFBTSxXQUFpQixvQkFBYyxTQUFTO0FBQUEsa0JBQzVDLFNBQVM7QUFBQSxvQkFDUCxDQUFDLHVCQUF1QixFQUFFLFNBQVMsVUFBVSxDQUFDO0FBQUEsa0JBQ2hEO0FBQUEsa0JBQ0EsVUFBVTtBQUFBLGtCQUNWLFlBQVk7QUFBQSxnQkFDZCxDQUFDO0FBRUQsb0JBQUksVUFBVSxNQUFNO0FBRWxCLHdCQUFNLGVBQXFCLFlBQU07QUFBQSxvQkFDekIsWUFBTSxXQUFXLGNBQWM7QUFBQSxvQkFDL0IsWUFBTSxjQUFjLFNBQVMsSUFBSTtBQUFBLGtCQUN6QztBQUdBLHVCQUFLLEtBQUssV0FBVyxLQUFLLFlBQVk7QUFDdEMscUNBQW1CO0FBQUEsZ0JBQ3JCO0FBQUEsY0FDRixTQUFTLEdBQUc7QUFDVix3QkFBUSxNQUFNLDJCQUEyQixFQUFFLEtBQUssQ0FBQztBQUFBLGNBQ25EO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRixDQUFDO0FBRUQsVUFBSSxDQUFDLGtCQUFrQjtBQUNyQixlQUFPO0FBQUEsTUFDVDtBQUVBLFlBQU0sU0FBZSwyQkFBcUIsS0FBSyxNQUFNO0FBQUEsUUFDbkQsVUFBVTtBQUFBLFFBQ1YsU0FBUyxDQUFDLDBCQUEwQjtBQUFBLE1BQ3RDLENBQUM7QUFFRCxhQUFPO0FBQUEsUUFDTCxNQUFNLFFBQVEsUUFBUTtBQUFBLFFBQ3RCLEtBQUssUUFBUTtBQUFBLE1BQ2Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGOzs7QURyRkEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sR0FBRyx5QkFBeUIsQ0FBQztBQUFBLEVBQzdDLFFBQVEsRUFBRSxNQUFNLE1BQU0sTUFBTSxLQUFLO0FBQ25DLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
