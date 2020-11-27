module.exports = {
    plugins: ['import'],
    settings: {
        'import/resolver': {
            node: {
                paths: ['src'],
                moduleDirectory: ['node_modules', 'src/'],
                extensions: [
                    '.js',
                    '.jsx',
                    '.ts',
                    '.tsx',
                    '.types',
                    '.types.tsx',
                    '.d.ts',
                    '.android.js',
                    '.android.jsx',
                    '.android.ts',
                    '.android.tsx',
                    '.ios.js',
                    '.ios.jsx',
                    '.ios.ts',
                    '.ios.tsx',
                    '.web.js',
                    '.web.jsx',
                    '.web.ts',
                    '.web.tsx',
                ],
            },
        },
    },
    extends: ['plugin:@typescript-eslint/recommended', '@react-native-community'],
    rules: {
        quotes: [
            'error',
            'single',
            {
                avoidEscape: true,
            },
        ],
        'max-len': ['error', 120],
        'comma-dangle': ['error', 'always-multiline'],
        '@typescript-eslint/ban-ts-comment': 2,
        '@typescript-eslint/no-explicit-any': 2,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.types', '.styles'] }],
        'react-native/no-unused-styles': 2,
        'react-native/split-platform-components': 2,
        'react-native/no-inline-styles': 0,
        'react-native/no-color-literals': 0,
        'react-native/no-raw-text': 0,
        'import/extensions': ['error', 'never', { svg: 'always', tsx: 'never', types: 'never' }],
        'import/order': [
            'error',
            {
                groups: [
                    ['external', 'builtin'],
                    ['parent', 'internal'],
                    ['index', 'sibling'],
                ],
                'newlines-between': 'always',
            },
        ],
        'import/no-duplicates': 2,
        'import/no-useless-path-segments': 2,
        'import/prefer-default-export': 0,
        'import/named': 0,
        'import/namespace': 0,
        'import/default': 0,
        'import/no-named-as-default-member': 0,
        'import/no-named-as-default': 0,
        'import/no-cycle': 0,
        'import/no-unused-modules': 0,
        'import/no-deprecated': 0,
        '@typescript-eslint/indent': 0,
        'import/no-anonymous-default-export': 2,
        'react-hooks/rules-of-hooks': 2,
        'react-hooks/exhaustive-deps': ['error', { additionalHooks: '(useMemoOne)' }],
        'jest/no-identical-title': 2,
        'jest/valid-expect': 2,
        camelcase: 2,
        'prefer-destructuring': 2,
        'no-nested-ternary': 2,
    },
};
