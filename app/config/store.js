import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import reducers from '../reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

// Prevents middleware from shipping to production
const middleware = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
  // logger must be last push
  middleware.push(logger);
}

const store = createStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;
