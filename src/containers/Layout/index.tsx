import * as React from 'react';
import { connect } from 'react-redux';
import { NavigationScreenProp } from 'react-navigation';
import { Container, Drawer } from 'native-base';

import { Dispatch, RootStateType } from '../../constants/types';
import Sidebar from './../../components/Sidebar';
import AppFooter from '../../components/AppFooter';
import AppHeader from '../../components/AppHeader';

interface Props {
  navigation: NavigationScreenProp<{key: string}>;
}

interface DispatchProps {}

// tslint:disable-next-line:no-any
const mapStateToProps = (state: RootStateType, ownProps: any): Props => {
  return {
    navigation: ownProps.navigation
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {};
};

// tslint:disable-next-line:no-any
export const withLayout = (WrappedComponent: any): any => {

  class Layout extends React.Component<Props & DispatchProps> {

    drawer: Drawer | null = null;

    render() {
      return (
        <Container>
          <AppHeader
            navigation={this.props.navigation}
            openDrawer={() => this.drawer && this.drawer._root.open()}
          />
          <Drawer
            content={<Sidebar navigation={this.props.navigation}/>}
            ref={(ref) => { this.drawer = ref; }}
          >
            <WrappedComponent {...this.props} />
          </Drawer>
          <AppFooter navigation={this.props.navigation} />
        </Container>
      );
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Layout);
};
