module.exports = (api) => {
    api.injectFeature({
        name: 'Linter / Formatter',
        value: 'linter',
        short: 'Linter',
        description: 'Check and enforce code quality with ESLint or Prettier',
        link: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint',
        checked: true,
    })
    
    api.injectPrompt({
        name: 'eslintConfig',
        when: answers => answers.features.includes('linter'),
        type: 'list',
        message: '选择一个linter/formatter配置:',
        description: '建议检查代码错误并强制执行同源代码样式。',
        choices: () => [
            {
                name: 'ESLint + Airbnb config',
                value: 'airbnb',
                short: 'Airbnb',
            },
            {
                name: 'ESLint + Standard config',
                value: 'standard',
                short: 'Standard',
            },
        ],
    })
      
    api.injectPrompt({
        name: 'lintOn',
        message: '选择其他lint功能:',
        when: answers => answers.features.includes('linter'),
        type: 'checkbox',
        choices: [
            {
                name: 'Lint on save',
                value: 'save',
                checked: true,
            },
            {
                name: 'Lint and fix on commit',
                value: 'commit',
            },
        ],
    })
}
