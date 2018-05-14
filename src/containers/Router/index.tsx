import { createDrawerNavigator } from 'react-navigation';

import { withLayout } from '../Layout';
import Home from '../Home';
import Opportunities from '../Opportunities';
import Research from '../Research';
import Alerts from '../Alerts';

const Router = createDrawerNavigator({
  Home: {
    screen: withLayout(Home),
  },
  Opportunities: {
    screen: withLayout(Opportunities),
  },
  Research: {
    screen: withLayout(Research),
  },
  Alerts: {
    screen: withLayout(Alerts),
  }
});

export default Router;
