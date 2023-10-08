module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "references-empty": [2, "never"],
    "subject-case": [2, "always", ["lower-case", "upper-case"]],
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w*)(?:\((\w*)\))?:\s([a-zA-Z]*-[\d]*)\s(.*)$/,
      headerCorrespondence: ['type', 'scope', 'ticket', 'subject'],
      referenceActions: false,
      issuePrefixes: ["SNEGDEV-"],
    },
  },
};
