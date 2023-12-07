module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['airbnb-base', 'prettier'],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['./src/**/*.js'],
        },
    ],
    rules: {
        quotes: [2, 'single'],
        indent: [2, 4],
    },
    parserOptions: {
        sourceType: 'module',
    },
};
