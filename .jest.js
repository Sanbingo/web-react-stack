module.exports = {
  // 配置文件，在运行测试案例代码之前，Jest会先运行这里的配置文件来初始化指定的测试环境
  setupFiles: [ './test/setup.js'],
  // 代表支持加载的文件名
  moduleFileExtensions: ['js', 'jsx'],
  // 用正则来匹配不用测试的文件
  testPathIgnorePatterns: ['/node_modules/'],
  // 正则表示的测试文件，测试文件的格式为xxx.test.js
  testRegex: '.*\\.test\\.js$',
  // 是否生成测试覆盖报告，如果开启，会增加测试的时间
  collectCoverage: false,
  // 生成测试覆盖报告是检测的覆盖文件
  collectCoverageFrom: ['client/**/*.{js}'],
  // 用babel-jest来编译文件，生成ES6/7的语法
  transform: {
    "^.+\\.js$": "babel-jest"
  }
}