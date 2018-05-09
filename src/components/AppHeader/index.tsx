import React from 'react';
import {
  Button, Header,
  Title, Left, Icon, Body, Right
} from 'native-base';

interface Props {
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
          <Title>Header</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}

export default AppHeader;
