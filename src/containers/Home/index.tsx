import * as React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';

import { Dispatch, RootStateType } from '../../constants/types';
import { loadInitialData, changeLocale } from '../../redux/app/actions';
import { toggleSidebarVisibility } from '../../redux/ui/actions';

import FormattedMessage from '../../components/FormattedMessage';

interface Props {
  loading: boolean;
  sidebarVisible: boolean;
}

interface DispatchProps {
  loadInitialData(): {};
  toggleSidebarVisibility(): {};
  changeLocale(): {};
}

// tslint:disable-next-line:no-any
const mapStateToProps = (state: RootStateType, ownProps: any): Props => {
  return {
    loading: state.app.loading,
    sidebarVisible: state.ui.sidebarVisible
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    loadInitialData: () => dispatch(loadInitialData()),
    toggleSidebarVisibility: () => dispatch(toggleSidebarVisibility()),
    changeLocale: () => dispatch(changeLocale())
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export class Home extends React.Component<Props & DispatchProps> {

  render() {
    return (
      <View style={styles.container}>
        <FormattedMessage id="app.welcome" />
        <Button primary={true} onPress={this.props.changeLocale}>
          <Text>Change Locale</Text>
        </Button>
      </View>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
