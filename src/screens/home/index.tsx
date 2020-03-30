import React, { Fragment } from 'react';
import Button from '../../components/button';
import { NavigationInterface } from '../types';
import { useStoreContext } from '../../store';

import { SafeAreaView, Container, Welcome } from './styles';
import StatusBar from '../../commons/status-bar';

interface HomeScreenProp extends NavigationInterface {
  testID?: string;
}

export default function Home(props: HomeScreenProp) {
  return (
    <Fragment>
      <SafeAreaView>
        <Container>
          <Button title="Home screen button" />
          <Welcome>Home Screen</Welcome>
        </Container>
      </SafeAreaView>
    </Fragment>
  );
}
