/* eslint-disable no-console */
const logger = store => next => (action) => {
  console.group(action.type);
  console.info('dispatching', action);
  console.info('pre state', store.getState());
  const result = next(action);
  console.info('next state', store.getState());
  console.groupEnd();
  return result;
};

export default logger;
