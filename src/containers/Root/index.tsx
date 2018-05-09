import * as React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { FormattedMessage } from 'react-intl-native';
import { Text } from 'native-base';

import { Dispatch, RootStateType } from '../../constants/types';
import { loadInitialData } from '../../redux/app/actions';
import { toggleSidebarVisibility } from '../../redux/ui/actions';

interface Props {
  loading: boolean;
  sidebarVisible: boolean;
}

interface DispatchProps {
  loadInitialData(): {};
  toggleSidebarVisibility(): {};
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
    toggleSidebarVisibility: () => dispatch(toggleSidebarVisibility())
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

export class Root extends React.Component<Props & DispatchProps> {

  componentDidMount() {
    // this.props.navigation.openDrawer();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text><FormattedMessage id="app.welcome" /></Text>
      </View>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Root);
