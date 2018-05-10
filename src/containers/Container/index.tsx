import * as React from 'react';

import { LocaleEnum } from '../../constants/enums';
import LanguageProvider from '../LanguageProvider';
import Router from '../Router';

export class Container extends React.Component<{}, never> {
  render() {
    return (
      <LanguageProvider locale={LocaleEnum.en}>
        <Router />
      </LanguageProvider>
    );
  }
}
