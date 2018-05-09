import React from 'react';
import {
   Footer, FooterTab,
   Button, Text, Icon
} from 'native-base';

class AppFooter extends React.PureComponent {

  render() {
    return (
      <Footer>
        <FooterTab>
          <Button vertical={true}>
            <Icon name="apps" />
            <Text>Apps</Text>
          </Button>
          <Button vertical={true}>
            <Icon name="camera" />
            <Text>Camera</Text>
          </Button>
          <Button vertical={true} active={true}>
            <Icon active={true} name="navigate" />
            <Text>Navigate</Text>
          </Button>
          <Button vertical={true}>
            <Icon name="person" />
            <Text>Contact</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default AppFooter;
