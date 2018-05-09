import * as React from 'react';
import { Provider } from 'react-redux';
import Expo from 'expo';

import { Container } from './src/containers/Container';
import { configureStore } from './src/store';

const store = configureStore();

export default class App extends React.Component<{}> {

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}
