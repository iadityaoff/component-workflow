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
                    ["@babel/preset-typescript", { allExtensions: true, isTSX: true }],
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic2NyaXB0cy92aXRlLXBsdWdpbi1wcmVjb21waWxlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL3Nlc3Npb25zL2NvbXBhc3Npb25hdGUtd2l6YXJkbHktcGxhbmNrL21udC9Db21wb25lbnQgd29ya2Zsb3dcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9zZXNzaW9ucy9jb21wYXNzaW9uYXRlLXdpemFyZGx5LXBsYW5jay9tbnQvQ29tcG9uZW50IHdvcmtmbG93L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9zZXNzaW9ucy9jb21wYXNzaW9uYXRlLXdpemFyZGx5LXBsYW5jay9tbnQvQ29tcG9uZW50JTIwd29ya2Zsb3cvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHsgcHJlY29tcGlsZVJlZ2lzdHJ5UGx1Z2luIH0gZnJvbSBcIi4vc2NyaXB0cy92aXRlLXBsdWdpbi1wcmVjb21waWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBwcmVjb21waWxlUmVnaXN0cnlQbHVnaW4oKV0sXG4gIHNlcnZlcjogeyBwb3J0OiA1MTczLCBob3N0OiB0cnVlIH0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL3Nlc3Npb25zL2NvbXBhc3Npb25hdGUtd2l6YXJkbHktcGxhbmNrL21udC9Db21wb25lbnQgd29ya2Zsb3cvc2NyaXB0c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL3Nlc3Npb25zL2NvbXBhc3Npb25hdGUtd2l6YXJkbHktcGxhbmNrL21udC9Db21wb25lbnQgd29ya2Zsb3cvc2NyaXB0cy92aXRlLXBsdWdpbi1wcmVjb21waWxlLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9zZXNzaW9ucy9jb21wYXNzaW9uYXRlLXdpemFyZGx5LXBsYW5jay9tbnQvQ29tcG9uZW50JTIwd29ya2Zsb3cvc2NyaXB0cy92aXRlLXBsdWdpbi1wcmVjb21waWxlLnRzXCI7aW1wb3J0IHR5cGUgeyBQbHVnaW4gfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0ICogYXMgYmFiZWwgZnJvbSBcIkBiYWJlbC9jb3JlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVjb21waWxlUmVnaXN0cnlQbHVnaW4oKTogUGx1Z2luIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBcInZpdGUtcGx1Z2luLXByZWNvbXBpbGUtcmVnaXN0cnlcIixcbiAgICBlbmZvcmNlOiBcInByZVwiLFxuICAgIGFzeW5jIHRyYW5zZm9ybShjb2RlLCBpZCkge1xuICAgICAgLy8gT25seSBwcm9jZXNzIGZpbGVzIGluIHNyYy9kYXRhL3JlZ2lzdHJ5LyB0aGF0IGFyZSBUUy9KU1xuICAgICAgaWYgKCFpZC5pbmNsdWRlcyhcIi9zcmMvZGF0YS9yZWdpc3RyeS9cIikgfHwgIWlkLmVuZHNXaXRoKFwiLnRzXCIpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBXZSB3aWxsIHBhcnNlIHRoZSBmaWxlIHVzaW5nIEJhYmVsLCBmaW5kICdjb2RlOiBcIi4uLlwiJyBvciAnY29kZTogYC4uLmAnLFxuICAgICAgLy8gY29tcGlsZSB0aGUgc3RyaW5nLCBhbmQgaW5qZWN0ICdjb21waWxlZENvZGU6IFwiLi4uXCInIGludG8gdGhlIG9iamVjdC5cbiAgICAgIFxuICAgICAgY29uc3QgYXN0ID0gYmFiZWwucGFyc2UoY29kZSwge1xuICAgICAgICBmaWxlbmFtZTogaWQsXG4gICAgICAgIHByZXNldHM6IFtcIkBiYWJlbC9wcmVzZXQtdHlwZXNjcmlwdFwiXSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIWFzdCkgcmV0dXJuIG51bGw7XG5cbiAgICAgIGxldCBoYXNNb2RpZmljYXRpb25zID0gZmFsc2U7XG5cbiAgICAgIGJhYmVsLnRyYXZlcnNlKGFzdCwge1xuICAgICAgICBPYmplY3RFeHByZXNzaW9uKHBhdGgpIHtcbiAgICAgICAgICAvLyBMb29rIGZvciBhbiBvYmplY3QgcHJvcGVydHkgbmFtZWQgJ2NvZGUnXG4gICAgICAgICAgY29uc3QgY29kZVByb3AgPSBwYXRoLm5vZGUucHJvcGVydGllcy5maW5kKFxuICAgICAgICAgICAgKHByb3ApID0+XG4gICAgICAgICAgICAgIHByb3AudHlwZSA9PT0gXCJPYmplY3RQcm9wZXJ0eVwiICYmXG4gICAgICAgICAgICAgIHByb3Aua2V5LnR5cGUgPT09IFwiSWRlbnRpZmllclwiICYmXG4gICAgICAgICAgICAgIHByb3Aua2V5Lm5hbWUgPT09IFwiY29kZVwiXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmIChjb2RlUHJvcCAmJiBjb2RlUHJvcC50eXBlID09PSBcIk9iamVjdFByb3BlcnR5XCIpIHtcbiAgICAgICAgICAgIGxldCByYXdDb2RlID0gXCJcIjtcbiAgICAgICAgICAgIGlmIChjb2RlUHJvcC52YWx1ZS50eXBlID09PSBcIlN0cmluZ0xpdGVyYWxcIikge1xuICAgICAgICAgICAgICByYXdDb2RlID0gY29kZVByb3AudmFsdWUudmFsdWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvZGVQcm9wLnZhbHVlLnR5cGUgPT09IFwiVGVtcGxhdGVMaXRlcmFsXCIpIHtcbiAgICAgICAgICAgICAgLy8gVXNlIGNvb2tlZCAobm90IHJhdykgc28gSlMgZXNjYXBlIHNlcXVlbmNlcyBsaWtlIFxcYCBhbmQgXFwkeyBhcmVcbiAgICAgICAgICAgICAgLy8gcmVzb2x2ZWQgdG8gdGhlaXIgbGl0ZXJhbCBmb3JtIGJlZm9yZSB3ZSByZS1jb21waWxlIHRocm91Z2ggQmFiZWwuXG4gICAgICAgICAgICAgIC8vIFVzaW5nIGByYXdgIHByZXNlcnZlZCBiYWNrc2xhc2hlcyBhbmQgY2F1c2VkIE1pc3NpbmdVbmljb2RlRXNjYXBlXG4gICAgICAgICAgICAgIC8vIGVycm9ycyBvbiBldmVyeSB2YXJpYW50IGNvbnRhaW5pbmcgYSBuZXN0ZWQgY2xhc3NOYW1lIHRlbXBsYXRlIGxpdGVyYWwuXG4gICAgICAgICAgICAgIHJhd0NvZGUgPSBjb2RlUHJvcC52YWx1ZS5xdWFzaXNcbiAgICAgICAgICAgICAgICAubWFwKChxKSA9PiBxLnZhbHVlLmNvb2tlZCA/PyBxLnZhbHVlLnJhdylcbiAgICAgICAgICAgICAgICAuam9pbihcIlwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJhd0NvZGUpIHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBDb21waWxlIHRoZSBUU1ggUmVhY3QgY29kZSB1c2luZyBiYWJlbC4gcHJlc2V0LXR5cGVzY3JpcHRcbiAgICAgICAgICAgICAgICAvLyBtdXN0IGNvbWUgZmlyc3Qgc28gVFMtb25seSBzeW50YXggKGFzIGNvbnN0LCBnZW5lcmljcywgdHlwZVxuICAgICAgICAgICAgICAgIC8vIGFubm90YXRpb25zKSBpcyBzdHJpcHBlZCBiZWZvcmUgSlNYIGlzIHRyYW5zZm9ybWVkLlxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBpbGVkID0gYmFiZWwudHJhbnNmb3JtU3luYyhyYXdDb2RlLCB7XG4gICAgICAgICAgICAgICAgICBwcmVzZXRzOiBbXG4gICAgICAgICAgICAgICAgICAgIFtcIkBiYWJlbC9wcmVzZXQtdHlwZXNjcmlwdFwiLCB7IGFsbEV4dGVuc2lvbnM6IHRydWUsIGlzVFNYOiB0cnVlIH1dLFxuICAgICAgICAgICAgICAgICAgICBbXCJAYmFiZWwvcHJlc2V0LXJlYWN0XCIsIHsgcnVudGltZTogXCJjbGFzc2ljXCIgfV0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgZmlsZW5hbWU6IFwiY29tcG9uZW50LnRzeFwiLFxuICAgICAgICAgICAgICAgICAgc291cmNlVHlwZTogXCJtb2R1bGVcIixcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChjb21waWxlZD8uY29kZSkge1xuICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IHByb3BlcnR5ICdjb21waWxlZENvZGUnXG4gICAgICAgICAgICAgICAgICBjb25zdCBjb21waWxlZFByb3AgPSBiYWJlbC50eXBlcy5vYmplY3RQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgYmFiZWwudHlwZXMuaWRlbnRpZmllcihcImNvbXBpbGVkQ29kZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgYmFiZWwudHlwZXMuc3RyaW5nTGl0ZXJhbChjb21waWxlZC5jb2RlKVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgLy8gQXBwZW5kIGl0IHRvIHRoZSBvYmplY3RcbiAgICAgICAgICAgICAgICAgIHBhdGgubm9kZS5wcm9wZXJ0aWVzLnB1c2goY29tcGlsZWRQcm9wKTtcbiAgICAgICAgICAgICAgICAgIGhhc01vZGlmaWNhdGlvbnMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGNvbXBpbGluZyBjb2RlIGluICR7aWR9OmAsIGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghaGFzTW9kaWZpY2F0aW9ucykge1xuICAgICAgICByZXR1cm4gbnVsbDsgLy8gTm8gY2hhbmdlc1xuICAgICAgfVxuXG4gICAgICBjb25zdCBvdXRwdXQgPSBiYWJlbC50cmFuc2Zvcm1Gcm9tQXN0U3luYyhhc3QsIGNvZGUsIHtcbiAgICAgICAgZmlsZW5hbWU6IGlkLFxuICAgICAgICBwcmVzZXRzOiBbXCJAYmFiZWwvcHJlc2V0LXR5cGVzY3JpcHRcIl0sXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29kZTogb3V0cHV0Py5jb2RlIHx8IGNvZGUsXG4gICAgICAgIG1hcDogb3V0cHV0Py5tYXAsXG4gICAgICB9O1xuICAgIH0sXG4gIH07XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThXLFNBQVMsb0JBQW9CO0FBQzNZLE9BQU8sV0FBVzs7O0FDQWxCLFlBQVksV0FBVztBQUVoQixTQUFTLDJCQUFtQztBQUNqRCxTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxNQUFNLFVBQVUsTUFBTSxJQUFJO0FBRXhCLFVBQUksQ0FBQyxHQUFHLFNBQVMscUJBQXFCLEtBQUssQ0FBQyxHQUFHLFNBQVMsS0FBSyxHQUFHO0FBQzlELGVBQU87QUFBQSxNQUNUO0FBS0EsWUFBTSxNQUFZLFlBQU0sTUFBTTtBQUFBLFFBQzVCLFVBQVU7QUFBQSxRQUNWLFNBQVMsQ0FBQywwQkFBMEI7QUFBQSxNQUN0QyxDQUFDO0FBRUQsVUFBSSxDQUFDLElBQUssUUFBTztBQUVqQixVQUFJLG1CQUFtQjtBQUV2QixNQUFNLGVBQVMsS0FBSztBQUFBLFFBQ2xCLGlCQUFpQixNQUFNO0FBRXJCLGdCQUFNLFdBQVcsS0FBSyxLQUFLLFdBQVc7QUFBQSxZQUNwQyxDQUFDLFNBQ0MsS0FBSyxTQUFTLG9CQUNkLEtBQUssSUFBSSxTQUFTLGdCQUNsQixLQUFLLElBQUksU0FBUztBQUFBLFVBQ3RCO0FBRUEsY0FBSSxZQUFZLFNBQVMsU0FBUyxrQkFBa0I7QUFDbEQsZ0JBQUksVUFBVTtBQUNkLGdCQUFJLFNBQVMsTUFBTSxTQUFTLGlCQUFpQjtBQUMzQyx3QkFBVSxTQUFTLE1BQU07QUFBQSxZQUMzQixXQUFXLFNBQVMsTUFBTSxTQUFTLG1CQUFtQjtBQUtwRCx3QkFBVSxTQUFTLE1BQU0sT0FDdEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLFVBQVUsRUFBRSxNQUFNLEdBQUcsRUFDeEMsS0FBSyxFQUFFO0FBQUEsWUFDWjtBQUVBLGdCQUFJLFNBQVM7QUFDWCxrQkFBSTtBQUlGLHNCQUFNLFdBQWlCLG9CQUFjLFNBQVM7QUFBQSxrQkFDNUMsU0FBUztBQUFBLG9CQUNQLENBQUMsNEJBQTRCLEVBQUUsZUFBZSxNQUFNLE9BQU8sS0FBSyxDQUFDO0FBQUEsb0JBQ2pFLENBQUMsdUJBQXVCLEVBQUUsU0FBUyxVQUFVLENBQUM7QUFBQSxrQkFDaEQ7QUFBQSxrQkFDQSxVQUFVO0FBQUEsa0JBQ1YsWUFBWTtBQUFBLGdCQUNkLENBQUM7QUFFRCxvQkFBSSxVQUFVLE1BQU07QUFFbEIsd0JBQU0sZUFBcUIsWUFBTTtBQUFBLG9CQUN6QixZQUFNLFdBQVcsY0FBYztBQUFBLG9CQUMvQixZQUFNLGNBQWMsU0FBUyxJQUFJO0FBQUEsa0JBQ3pDO0FBR0EsdUJBQUssS0FBSyxXQUFXLEtBQUssWUFBWTtBQUN0QyxxQ0FBbUI7QUFBQSxnQkFDckI7QUFBQSxjQUNGLFNBQVMsR0FBRztBQUNWLHdCQUFRLE1BQU0sMkJBQTJCLEVBQUUsS0FBSyxDQUFDO0FBQUEsY0FDbkQ7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGLENBQUM7QUFFRCxVQUFJLENBQUMsa0JBQWtCO0FBQ3JCLGVBQU87QUFBQSxNQUNUO0FBRUEsWUFBTSxTQUFlLDJCQUFxQixLQUFLLE1BQU07QUFBQSxRQUNuRCxVQUFVO0FBQUEsUUFDVixTQUFTLENBQUMsMEJBQTBCO0FBQUEsTUFDdEMsQ0FBQztBQUVELGFBQU87QUFBQSxRQUNMLE1BQU0sUUFBUSxRQUFRO0FBQUEsUUFDdEIsS0FBSyxRQUFRO0FBQUEsTUFDZjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7OztBRDdGQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLHlCQUF5QixDQUFDO0FBQUEsRUFDN0MsUUFBUSxFQUFFLE1BQU0sTUFBTSxNQUFNLEtBQUs7QUFDbkMsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
