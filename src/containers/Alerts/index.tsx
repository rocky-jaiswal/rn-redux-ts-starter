import * as React from 'react';
import { connect } from 'react-redux';
import { Content, Text } from 'native-base';

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

const mapStateToProps = (state: RootStateType, ownProps: {}): Props => {
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

export class Alerts extends React.Component<Props & DispatchProps> {

  render() {
    return (
      <Content>
        <Text>Alerts Page</Text>
      </Content>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Alerts);
