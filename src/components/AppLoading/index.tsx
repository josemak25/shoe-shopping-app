import React from 'react';
import { Image } from 'react-native';
import { AppLoading as ExpoAppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';

export default function AppLoading({ setIsAppReady }) {
  const cacheImages = (images: number[]) => {
    return images.map(image => {
      return typeof image === 'string'
        ? Image.prefetch(image)
        : Asset.fromModule(image).downloadAsync();
    });
  };

  const cacheFonts = (fonts: any[]) => {
    return fonts.map(font => Font.loadAsync(font));
  };

  const loadAllAppAssets = async () => {
    const imageAssets = cacheImages([
      require('../../../assets/icon.png'),
      require('../../../assets/splash.png'),
      require('../../../assets/images/shoe1.png'),
      require('../../../assets/images/shoe2.png'),
      require('../../../assets/images/shoe3.png'),
      require('../../../assets/images/shoe4.png'),
      require('../../../assets/images/shoe5.png'),
      require('../../../assets/images/shoe6.png'),
      require('../../../assets/images/mask-group.png')
    ]);

    const fontAssets = cacheFonts([
      {
        'notosans-regular': require('../../../assets/fonts/NotoSans-Regular.ttf')
      },
      {
        'notosans-bold': require('../../../assets/fonts/NotoSans-Bold.ttf')
      }
    ]);

    await Promise.all([...imageAssets, ...fontAssets]);
  };

  return (
    <ExpoAppLoading
      startAsync={loadAllAppAssets}
      onFinish={() => setIsAppReady(true)}
      onError={console.warn}
    />
  );
}
