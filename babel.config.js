module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    // 'lodash',
    [
      'import',
      {
        libraryName: 'ant-design-vue',
        libraryDirectory: 'es',
        style: 'css'
      },
      'ant-design-vue'
    ]
  ]
}
