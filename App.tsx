import * as React from 'react';
import { Provider } from 'react-redux';
import { View } from 'native-base';
import Expo from 'expo';

import Router from './src/containers/Router';
import { configureStore } from './src/store';

interface InitialState {
  fontLoaded: boolean;
}

const store = configureStore();

export default class App extends React.Component<{}> {

  state: InitialState = { fontLoaded: false };

  componentDidMount() {
    this.loadAssetsAsync();
  }

  async loadAssetsAsync() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) {
      return (
        <View />
      );
    }

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
