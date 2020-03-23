import React, { useState } from 'react';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';
import { SearchBar } from 'react-native-elements';
import { Container, SearchInputWrapper, Advert } from './styles';
import Products from '../../components/products';

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
