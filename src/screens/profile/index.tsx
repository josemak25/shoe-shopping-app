import React, { Fragment } from 'react';
import Button from '../../components/button';
import { NavigationInterface } from '../types';
import StatusBar from '../../commons/status-bar';

import { SafeAreaView, Container, Welcome } from './styles';

interface ProfileScreenProp extends NavigationInterface {
  testID?: string;
}

export default function Profile(props: ProfileScreenProp) {
  return (
    <Fragment>
      <SafeAreaView>
        <Container>
          <Button title="Profile screen button" />
          <Welcome>Profile Screen</Welcome>
        </Container>
      </SafeAreaView>
    </Fragment>
  );
}
