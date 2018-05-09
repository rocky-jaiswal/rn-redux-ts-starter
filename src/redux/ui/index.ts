import * as Immutable from 'seamless-immutable';
import { Action } from 'redux';

import { UIStateType } from '../../constants/types';
import { TOGGLE_SIDEBAR_VISIBILITY } from './actions';

const istate: UIStateType = {
  sidebarVisible: false
};

export const initialState = Immutable.from(istate);

// tslint:disable-next-line:no-any
const uiReducer = (state = initialState, action: Action<any>): UIStateType => {
  switch (action.type) {

    case TOGGLE_SIDEBAR_VISIBILITY:
      return state
        .set('sidebarVisible', !state.sidebarVisible);

    default:
      return state;
  }
};

export default uiReducer;
