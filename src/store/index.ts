import { applyMiddleware, compose, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { RootStateType } from '../constants/types';
import { createReducer, reduxInitialState } from '../redux';
import allSagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export function configureStore(): Store<RootStateType> {

  const middlewares = [
    sagaMiddleware
  ];

  const enhancers = [
    applyMiddleware(...middlewares)
  ];

  const composeEnhancers: any =
    process.env.NODE_ENV !== 'production' && window &&
      // tslint:disable-next-line:no-string-literal
      window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ?
      // tslint:disable-next-line:no-string-literal
      window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] : compose;

  // tslint:disable-next-line:no-any
  const store = createStore<RootStateType>(
    createReducer(),
    reduxInitialState,
    composeEnhancers(...enhancers)
  );

  allSagas.map((saga) => sagaMiddleware.run(saga));

  return store;

}
