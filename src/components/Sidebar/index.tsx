import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { Button, Container, Content, Text } from 'native-base';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  }
});

interface Props {
  navigation: NavigationScreenProp<{}>;
}

class Sidebar extends React.Component<Props> {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Button full={true} light={true} onPress={() => this.props.navigation.navigate('Root')}>
            <Text>Root</Text>
          </Button>
          <Button full={true} light={true} onPress={() => this.props.navigation.navigate('Opportunities')}>
            <Text>Opportunities</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Sidebar;
