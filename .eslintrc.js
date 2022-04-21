// eslint-disable-next-line no-undef
module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
        },
        "ecmaVersion": "latest",
        "sourceType": "module",
    },
    "plugins": [
        "react",
    ],
    "rules": {
        "react/prop-types": "off",
        "curly": "error",
        "quotes": [ "error", "double" ],
        "prefer-const": [ "error", {
            "destructuring": "any",
            "ignoreReadBeforeAssign": false,
        } ],
        "operator-assignment": [ "error", "always" ],
        "prefer-destructuring": [ "error", {"object": true, "array": false} ],
        "no-var": "error",
        "array-bracket-spacing": [ "error", "always" ],
        "arrow-spacing": [ "error", {"before": true, "after": true} ],
        "block-spacing": [ "error", "always" ],
        "comma-dangle": [ "error", "always-multiline" ],
        "comma-spacing": [ "error", {"before": false, "after": true} ],
        "indent": [ "error", 4 ],
        "key-spacing": [ "error", {"afterColon": true} ],
        "jsx-quotes": [ "error", "prefer-double" ],
        "keyword-spacing": [ "error", {"before": true, "after": true} ],
        "linebreak-style": [ "error", "unix" ],
        "no-multi-spaces": "error",
        "no-multiple-empty-lines": "error",
    },
}
