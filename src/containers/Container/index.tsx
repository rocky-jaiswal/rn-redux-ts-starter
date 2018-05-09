import * as React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import { LocaleEnum } from '../../constants/enums';
import LanguageProvider from '../LanguageProvider';
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

export class Container extends React.Component<{}, never> {

  render() {
    return (
      <LanguageProvider locale={LocaleEnum.en}>
        <Router />
      </LanguageProvider>
    );
  }

}
