import { combineReducers, Reducer, Action } from 'redux';
import { RootStateType } from '../constants/types';

import appReducer from './app/';
import uiReducer from './ui/';

import { initialState as appInitialState } from './app';
import { initialState as uiInitialState } from './ui';

export const reduxInitialState: RootStateType = {
  app: appInitialState,
  ui: uiInitialState
};

export function createReducer(): Reducer<RootStateType> {
  const reducer = combineReducers<RootStateType>({
    app: appReducer,
    ui: uiReducer
  });

  const rootReducer = (state: RootStateType, action: Action<{}>): RootStateType => {
    // if (action.type === LOGOUT) {
    //   sessionStorage.clear();
    //   state = reduxInitialState;
    // }
    return reducer(state, action);
  };

  return rootReducer;
}
