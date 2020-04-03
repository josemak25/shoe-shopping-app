import React, { useState, Fragment } from 'react';
import { OptimizedFlatList } from 'react-native-optimized-flatlist';
import { ActivityIndicator } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import { Feather } from '@expo/vector-icons';
import { useStoreContext } from '../../store';
import StatusBar from '../../commons/status-bar';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';
import productActions from '../../store/product/actions';
import {
  ProductInterface,
  PRODUCT_ACTION_TYPES
} from '../../store/product/types';
import Product from './product';

import Input from '../../components/input';
import Header from '../../commons/header';
import applyScale from '../../utils/applyScale';
import DrawerButton from '../../../assets/icons/drawer-menu-icon';
import FilterIcon from '../../../assets/icons/filter-icon';
import RESPONSIVE_GRID from '../../utils/getResponsiveGrid';

import { MenuIconContainer } from '../wallet/styles';
import {
  SafeAreaView,
  Container,
  HeaderLeftContainer,
  Advert,
  FilterContainer,
  ProductListContainer
} from './styles';

const AnimatedAdvert = Animated.createAnimatedComponent(Advert);

interface HomeScreenProp extends NavigationInterface {
  testID?: string;
}

export default function Home(props: HomeScreenProp) {
  const { colors } = useThemeContext();
  const { store, dispatch } = useStoreContext();

  const [state, setState] = useState({
    search: '',
    headerIconPressed: null,
    advertOpacity: new Animated.Value(1),
    advertPosition: new Animated.Value(-13),
    advertHidden: false,
    onRefresh: false,
    productPage: 1
  });

  // HANDLERS

  const handleChange = (value: string) => setState({ ...state, search: value });

  const handleHeaderIconPressed = (buttonType: string | null) => {
    setState({ ...state, headerIconPressed: buttonType });
  };

  const handleDrawer = () => props.navigation.openDrawer();

  const handleRefresh = () => {
    const payload = {};
    // productActions(dispatch, payload, PRODUCT_ACTION_TYPES.GET_LASTED_PRODUCTS);
  };

  const handleOnEndReached = () => {
    const payload = { skip: state.productPage + 1 };
    // productActions(dispatch, payload, PRODUCT_ACTION_TYPES.LOAD_MORE_PRODUCTS);
  };

  // ANIMATIONS

  const animateAdvert = (toValue: number) => {
    Animated.timing(state.advertOpacity, {
      toValue,
      duration: 300,
      easing: Easing.ease
    }).start();
  };

  const handleScroll = ({ nativeEvent }) => {
    const { contentOffset } = nativeEvent;

    if (contentOffset.y >= 10 && !state.advertHidden) {
      setState({ ...state, advertHidden: true });
      animateAdvert(0);
    }

    if (contentOffset.y <= 10 && state.advertHidden) {
      setState({ ...state, advertHidden: false });
      animateAdvert(1);
    }
  };

  return (
    <Fragment>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Container>
          <Header
            style={{
              backgroundColor: colors.DRAWER_COLOR,
              height: applyScale(100)
            }}
            headerLeftContainerStyle={{ height: applyScale(50), width: '80%' }}
            headerLeft={() => (
              <HeaderLeftContainer>
                <MenuIconContainer
                  onPress={handleDrawer}
                  onPressIn={() => handleHeaderIconPressed('menu')}
                  style={{
                    backgroundColor:
                      state.headerIconPressed === 'menu'
                        ? colors.FUND_WALLET_COLOR
                        : null,
                    width: 50,
                    borderRadius: 5
                  }}
                  onPressOut={() => handleHeaderIconPressed(null)}
                  activeOpacity={0.8}
                >
                  <DrawerButton fillColor={colors.BG_LIGHT_COLOR} width="30" />
                </MenuIconContainer>
                <Input
                  placeholder="Search the shop for shoes"
                  defaultValue={state.search}
                  onChangeText={handleChange}
                  style={{ paddingLeft: 35 }}
                />
                <Feather
                  name="search"
                  color={colors.FONT_DARK_COLOR}
                  size={20}
                  style={{ position: 'absolute', left: applyScale(75) }}
                />
              </HeaderLeftContainer>
            )}
            headerRight={() => (
              <FilterContainer>
                <FilterIcon fillColor={colors.FONT_DARK_COLOR} />
              </FilterContainer>
            )}
          />
          <AnimatedAdvert
            source={require('../../../assets/images/advert.png')}
            style={{
              resizeMode: 'cover',
              opacity: state.advertOpacity,
              top: state.advertPosition,
              display: state.advertHidden ? 'none' : null
            }}
          />
          <ProductListContainer>
            <OptimizedFlatList
              data={store.productState.products}
              renderItem={({ item }) => (
                <Product {...item} navigation={props.navigation} />
              )}
              numColumns={RESPONSIVE_GRID.numOfColumn}
              keyExtractor={(item: ProductInterface) => item.id}
              contentContainerStyle={{ paddingBottom: 20 }}
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={16}
              onScroll={handleScroll}
              refreshing={state.onRefresh}
              onRefresh={handleRefresh}
              onEndReachedThreshold={0.5}
              onEndReached={handleOnEndReached}
              ListFooterComponent={() =>
                store.productState.isLoading ? (
                  <ActivityIndicator
                    size="large"
                    color={colors.DRAWER_COLOR}
                    style={{ marginTop: 20 }}
                  />
                ) : null
              }
            />
          </ProductListContainer>
        </Container>
      </SafeAreaView>
    </Fragment>
  );
}
