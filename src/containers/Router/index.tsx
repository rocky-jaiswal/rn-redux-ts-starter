import { createDrawerNavigator } from 'react-navigation';

import { withLayout } from '../Layout';
import Root from '../Root';
import Opportunities from '../Opportunities';

const Router = createDrawerNavigator({
  Root: {
    screen: withLayout(Root),
  },
  Opportunities: {
    screen: withLayout(Opportunities),
  }
});

export default Router;
