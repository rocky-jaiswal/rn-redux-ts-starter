import React from 'react';
import { NavigationScreenProp } from 'react-navigation';
import {
   Footer, FooterTab,
   Button, Text, Icon
} from 'native-base';

interface Props {
  navigation: NavigationScreenProp<{key: string}>;
}

const Routes = ['Home', 'Opportunities', 'Research', 'Alerts'];
const iconMapping = {
  Home: 'home',
  Opportunities: 'search',
  Research: 'folder',
  Alerts: 'alert'
};
const nameMapping = {
  Home: 'Home',
  Opportunities: 'Search',
  Research: 'Research',
  Alerts: 'Alerts'
};

class AppFooter extends React.PureComponent<Props> {

  render() {
    return (
      <Footer>
        <FooterTab>
          {Routes.map((route, idx) => (
            <Button
              key={idx}
              vertical={true}
              active={this.props.navigation.state.key === route}
              onPress={() => this.props.navigation.navigate(route)}
            >
              <Icon name={iconMapping[route]} active={this.props.navigation.state.key === route} />
              <Text>{nameMapping[route]}</Text>
            </Button>
          ))}
        </FooterTab>
      </Footer>
    );
  }
}

export default AppFooter;
