// /* eslint-disable consistent-return */
const Koa = require('koa');

// const webpack = require('webpack');
// const convert = require('koa-convert');
// const Router = require('koa-router');
const serve = require('koa-static');
const views = require('koa-views');
const path = require('path');
const routers = require('./routers');


const app = new Koa();
// const router = new Router();

/*
* express方式
* 使用express + webpack-dev-middleware挂载webpack打包文件。
*/
// 告诉 express 使用 webpack-dev-middleware，
// 以及将 webpack.config.js 配置文件作为基础配置
// const express = require('express');
// const webpackDevMiddleware = require('webpack-dev-middleware');
// const app = express();
// const config = require('../webpack/webpack.dev.config');
// const webpack = require('webpack');
// const compiler = webpack(config);
// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath,
// }))

/*
 * koa方式
 * 使用koa + koa-webpack-dev-middleware挂载webpack打包文件。
 */
// const webpackMiddleware = require('koa-webpack-dev-middleware');
// const config = require('../webpack/webpack.dev.config');
// const webpack = require('webpack');
// const compiler = webpack(config);
// const convert = require('koa-convert');
// app.use(convert(webpackMiddleware(compiler, {
//   publicPath: config.output.publicPath,
//   stats: {
//     colors: true,
//   },
// })));

// 使用后端路由，把webpack打包的内容返回给浏览器，解决前端路由刷新的问题。
app.use(serve(path.join(__dirname, '../build')));
app.use(views(path.join(__dirname, './template'), { map: { html: 'ejs' } }));
// router.get('*', async (ctx) => {
//   // 把webpack打包输出的HTML文件返回给浏览器，解决前端路由（history模式）的刷新问题。
//   return ctx.render('index');
// });
// app.use(router.routes());

routers(app);

// 将文件 serve 到 port 3000。
app.listen(3000, () => {
  console.log('Example app listening on port 3000!\n');
});
