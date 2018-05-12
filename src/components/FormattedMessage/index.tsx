import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'native-base';
import { translationMessages } from '../../i18n/';

import { RootStateType } from '../../constants/types';

interface Props {
  id: string;
}

interface InternalProps {
  id?: string;
  locale: string;
}

const activeKeys = (locale: string, id: string) => {
  return translationMessages[locale][id];
};

const mapStateToProps = (state: RootStateType, ownProps: {}): InternalProps => {
  return {
    locale: state.app.locale
  };
};

class FmtMsg extends React.Component<InternalProps, {}> {

  render() {
    return (
      <Text>{activeKeys(this.props.locale, this.props.id || '')}</Text>
    );
  }
}

const Connected = connect(mapStateToProps, {})(FmtMsg);

const FormattedMessage = (props: Props) => {
  return <Connected id={props.id} />;
};

export default FormattedMessage;
