/* eslint-disable react/no-array-index-key */
import React, {
  Suspense,
  // lazy,
} from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
// import path from 'path';
import ErrorBoundary from './boundary';

// done: 自动注册，遍历目录中的config.js文件进行配置
// todo: 嵌套路由，需要解决命名空间的问题。
const contextRoute = require.context('../../pages', true, /config(s)?\.js$/);

// routes可以导出，在外部设置菜单
export const routes = contextRoute.keys().map((item) => {
  const component = contextRoute(item).default;
  const { ROUTE, TITLE } = contextRoute(item);
  // todo: 自动注册并动态路由
  // const lazyPath = path.resolve('../../pages', item)
  //   .replace(/\/pages/, '@Pages')
  //   .replace(/config\.js/, 'container');
  return ({
    path: ROUTE,
    name: TITLE,
    component,
  });
});

// 没有匹配的路由
const NoMatch = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div>
    Not Match Page!
  </div>
);

/*
// 根据路由动态加载
const Home = lazy(() => import('@Pages/home/container'));
const Hotel = lazy(() => import('@Pages/hotel/container'));
const Station = lazy(() => import('@Pages/station/container'));
const Todo = lazy(() => import('@Pages/todo/components/app'));

export const routes = [{
  path: '/home',
  name: 'home',
  component: Home,
},
{
  path: '/hotel',
  name: 'hotel',
  component: Hotel,
},
{
  path: '/station',
  name: 'station',
  component: Station,
}, {
  path: '/todo',
  name: 'todo',
  component: Todo,
}];
*/

export const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={
      // pass the sub-routes down to keep nesting
        props => (<route.component {...props} routes={route.routes} />)
      }
  />
);

// 跳转链接
const RouteLinkWithPath = (route = []) => (
  <nav>
    <ul>
      {route.map(item => <li key={item.path}><Link to={item.path}>{item.name}</Link></li>)}
    </ul>
  </nav>
);

export const App = () => (
  <ErrorBoundary>
    <Router>
      <Suspense fallback={<div> Loading... </div>}>
        {RouteLinkWithPath(routes)}
        <Switch>
          {
            routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)
          }
          <Route component={NoMatch} />
        </Switch>
      </Suspense>
    </Router>
  </ErrorBoundary>
);
