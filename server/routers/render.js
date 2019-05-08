const router = require('koa-router')();
// TODO: 解决路由自动配置问题
router.get(['/', '/async', '/demo', '/hotel', '/manage', '/station'], async ctx => ctx.render('index'));

module.exports = router;
