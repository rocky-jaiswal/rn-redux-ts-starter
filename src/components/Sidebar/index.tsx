import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import {
  Button, Container, Content,
  Icon, ListItem, Separator, Text
} from 'native-base';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    padding: 0
  },
  navigation: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#fff'
  },
  fullWidth: {
    flex: 1,
    width: '100%'
  },
  noPadding: {
    padding: 0,
    margin: 0
  }
});

interface Props {
  navigation: NavigationScreenProp<{}>;
}

class Sidebar extends React.Component<Props> {
  render() {
    return (
      <Container style={styles.container}>
        <Content style={styles.fullWidth}>
          <Separator bordered={true}>
            <Text>Workspace</Text>
          </Separator>
          <ListItem style={styles.noPadding}>
            <Button
              full={true}
              light={true}
              onPress={() => this.props.navigation.navigate('Home')}
              style={styles.navigation}
            >
              <Icon name="home" />
              <Text>Home</Text>
              <Icon name="arrow-forward" />
            </Button>
          </ListItem>

          <Separator bordered={true}>
            <Text>Opportunities</Text>
          </Separator>
          <ListItem style={styles.noPadding}>
            <Button
              full={true}
              light={true}
              onPress={() => this.props.navigation.navigate('Opportunities')}
              style={styles.navigation}
            >
              <Icon name="search" />
              <Text>Browse</Text>
              <Icon name="arrow-forward" />
            </Button>
          </ListItem>

          <Separator bordered={true} />
          <ListItem style={styles.noPadding}>
            <Button
              full={true}
              light={true}
              onPress={() => this.props.navigation.navigate('Research')}
              style={styles.navigation}
            >
              <Icon name="folder" />
              <Text>Resources</Text>
              <Icon name="arrow-forward" />
            </Button>
          </ListItem>

          <Separator bordered={true} />
          <ListItem style={styles.noPadding}>
            <Button
              full={true}
              light={true}
              onPress={() => this.props.navigation.navigate('Alerts')}
              style={styles.navigation}
            >
              <Icon name="alert" />
              <Text>Alerts</Text>
              <Icon name="arrow-forward" />
            </Button>
          </ListItem>

        </Content>
      </Container>
    );
  }
}

export default Sidebar;
