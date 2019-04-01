import createSagaMiddleware from 'redux-saga';
import {
  configureStore,
  getDefaultMiddleware,
} from 'redux-starter-kit';
import { createRootSaga, createRootReducer } from './lib';
import loggerMiddleware from './middleware/logger';

// 注：context的路径使用相对路径，必须显示引入，不能传参数，即需要指定相对目录的路径。
const contextSaga = require.context('../../pages', true, /saga(s)?\.js$/);
const contextReducer = require.context('../../pages', true, /reducer(s)?\.js$/);

function configureAppStore(preloadedState) {
  const { rootReducer } = createRootReducer(contextReducer);
  const { rootSaga } = createRootSaga(contextSaga);
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: rootReducer,
    middleware: [loggerMiddleware, sagaMiddleware, ...getDefaultMiddleware()],
    preloadedState,
    enhancers: [],
  });
  // 热加载
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept(contextReducer.keys(), () => store.replaceReducer(rootReducer));
  }
  sagaMiddleware.run(rootSaga);
  return store;
}

export default configureAppStore();
