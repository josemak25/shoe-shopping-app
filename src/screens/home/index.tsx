import React, { Fragment, useState } from 'react';
import Button from '../../components/button';
import { useStoreContext } from '../../store';
import StatusBar from '../../commons/status-bar';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';
import { SearchBar } from 'react-native-elements';
import Products from '../../components/products';

import { Container, SearchInputWrapper, Advert, SafeAreaView } from './styles';

interface HomeScreenProp extends NavigationInterface {
  testID?: string;
}

export default function Home(props: HomeScreenProp) {
  const [search, setSearch] = useState('');
  const { colors } = useThemeContext();

  return (
    <Container>
      <SearchInputWrapper>
        <SearchBar
          platform="ios"
          cancelButtonTitle="cancel"
          placeholder="Search the shop for shoe"
          onChangeText={search => {
            setSearch(search);
          }}
          inputContainerStyle={{ backgroundColor: colors.BG_LIGHT_COLOR }}
          containerStyle={{
            height: 40,
            paddingLeft: 10
          }}
          value={search}
        />
      </SearchInputWrapper>
      <Advert source={require('../../../assets/images/mask-group.png')} />
      <Products />
    </Container>
  );
}
