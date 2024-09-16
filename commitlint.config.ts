module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            ['feat', 'fix', 'perf', 'style', 'refactor', 'test', 'revert', 'ci', 'docs', 'chore'],
        ],
    },
}
