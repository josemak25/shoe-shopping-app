import React, { Fragment } from 'react';

import { Container, InputLabel } from './styles';

type InputProps = {
  style?: {};
  testID?: string;
  placeholder: string;
  inputLabel?: string;
  defaultValue: string;
  onChangeText(T: any): void;
};

export default function Input(props: InputProps) {
  return (
    <Fragment>
      <Container {...props} />
      {props.inputLabel && <InputLabel>{props.inputLabel}</InputLabel>}
    </Fragment>
  );
}
