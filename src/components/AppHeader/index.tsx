import React from 'react';
import { NavigationScreenProp } from 'react-navigation';
import {
  Button, Header,
  Title, Left, Icon, Body, Right
} from 'native-base';

interface Props {
  navigation: NavigationScreenProp<{key: string}>;
  openDrawer(): {};
}

class AppHeader extends React.Component<Props> {

  render() {
    return (
      <Header>
        <Left>
          <Button
            transparent={true}
            onPress={() => this.props.openDrawer()}
          >
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.navigation.state.key}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}

export default AppHeader;
