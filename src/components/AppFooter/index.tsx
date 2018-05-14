import React from 'react';
import { NavigationScreenProp } from 'react-navigation';
import {
   Footer, FooterTab,
   Button, Text, Icon
} from 'native-base';

interface Props {
  navigation: NavigationScreenProp<{key: string}>;
}

class AppFooter extends React.PureComponent<Props> {

  render() {
    return (
      <Footer>
        <FooterTab>
          <Button
            vertical={true}
            active={this.props.navigation.state.key === 'Home'}
            onPress={() => this.props.navigation.navigate('Home')}
          >
            <Icon name="home" active={this.props.navigation.state.key === 'Home'} />
            <Text>Home</Text>
          </Button>
          <Button
            vertical={true}
            active={this.props.navigation.state.key === 'Opportunities'}
            onPress={() => this.props.navigation.navigate('Opportunities')}
          >
            <Icon name="search" active={this.props.navigation.state.key === 'Opportunities'} />
            <Text>Search</Text>
          </Button>
          <Button
            vertical={true}
            active={this.props.navigation.state.key === 'Research'}
            onPress={() => this.props.navigation.navigate('Research')}
          >
            <Icon name="folder" active={this.props.navigation.state.key === 'Research'} />
            <Text>Research</Text>
          </Button>
          <Button
            vertical={true}
            active={this.props.navigation.state.key === 'Alerts'}
            onPress={() => this.props.navigation.navigate('Alerts')}
          >
            <Icon name="alert" active={this.props.navigation.state.key === 'Alerts'} />
            <Text>Alerts</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default AppFooter;
