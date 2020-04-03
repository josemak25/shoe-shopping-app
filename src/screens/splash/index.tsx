import React, { useEffect } from 'react';
import { NavigationInterface } from '../types';

import { Container, Logo } from './styles';

interface SplashScreenProp extends NavigationInterface {
  testID?: string;
}

export default function Splash({ navigation }: SplashScreenProp) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 2000);
  }, []);

  return (
    <Container>
      <Logo source={require('../../../assets/images/splash.png')} />
    </Container>
  );
}
