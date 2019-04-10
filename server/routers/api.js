const router = require('koa-router')();

router.prefix('/api');
// TODO：数据请求代理
router.get('/getUserList', async (ctx) => {
  ctx.set('Content-Type', 'applicaton/json');
  const data = [{ name: 'san', age: 18 }, { name: 'lin', age: 20 }];
  ctx.body = {
    status: 0,
    data,
    message: 'success',
  };
});

module.exports = router;
