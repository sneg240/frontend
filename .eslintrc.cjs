module.exports = {
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["@sneg240/eslint-config-custom"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
