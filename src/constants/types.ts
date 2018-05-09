import { Dispatch as ReduxDispatch, Action } from 'redux';

interface AppState {
  loading: boolean;
  locale: string;
}

export type AppStateType = AppState;

interface UIState {
  sidebarVisible: boolean;
}

export type UIStateType = UIState;

interface RootState {
  app: AppState;
  ui: UIState;
}

export type RootStateType = RootState;

export type Dispatch = ReduxDispatch<Action>;
