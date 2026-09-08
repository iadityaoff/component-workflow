const base = require("/sessions/compassionate-wizardly-planck/mnt/Component workflow/tailwind.config.js");
module.exports = {
  ...base,
  content: [
    "/sessions/compassionate-wizardly-planck/mnt/Component workflow/src/data/registry/**/*.ts",
    "/sessions/compassionate-wizardly-planck/mnt/Component workflow/src/data/components.ts",
    "/sessions/compassionate-wizardly-planck/mnt/Component workflow/src/components/previews/**/*.tsx",
  ],
  corePlugins: { preflight: true },
};
