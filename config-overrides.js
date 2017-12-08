/*
* @Author: Administrator
* @Date:   2017-12-08 10:58:49
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-08 10:59:21
*/

const { injectBabelPlugin } = require('react-app-rewired');
module.exports = function override(config, env) {
  // do stuff with the webpack config...
  config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
  return config;
};