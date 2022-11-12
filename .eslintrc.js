const base = require("@mendix/pluggable-widgets-tools/configs/eslint.ts.base.json");

module.exports = {
    ...base,
    rules: {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars" : "off",
        'max-len': ["error", { "code": 500 }]
    }
};
