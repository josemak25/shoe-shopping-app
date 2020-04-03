import React, { useState } from 'react';
import {
  DrawerItemList,
  DrawerContentScrollView
} from '@react-navigation/drawer';
import ContentLoader from 'react-native-skeleton-content';

import { useThemeContext } from '../theme';
import { useStoreContext } from '../store';
import ResponsiveImage from '../libs/responsiveImage';
import applyScale from '../utils/applyScale';
import boxShadow from '../utils/boxShadows';
import SignOutIcon from '../../assets/icons/signout-icon';

import {
  DrawerContainer,
  ProfileContainer,
  AvatarContainer,
  ProfileName,
  ProfileNumber,
  ProfileDetailsContainer,
  DrawerItemsContainer,
  SignOutContainer,
  SignOutText,
  SignOutButton
} from './styles';

const IMAGE_SIZE = applyScale(80);

export default function CustomDrawer(props) {
  const { colors } = useThemeContext();

  const {
    store: { userState }
  } = useStoreContext();

  const { user } = userState;

  const [animation, setAnimation] = useState({
    hideContentLoader: true,
    signOutPressed: false
  });

  const handleImageLoading = (error: any) => {
    if (!error) {
      setAnimation({ ...animation, hideContentLoader: false });
    }
  };

  const handleSignOutPressed = () => {
    setAnimation({ ...animation, signOutPressed: !animation.signOutPressed });
  };

  const handleSignOut = () => {};

  return (
    <DrawerContainer>
      <ProfileContainer>
        <AvatarContainer
          style={[
            boxShadow({
              elevation: 2,
              shadowOpacity: 0.1,
              shadowRadius: 5,
              width: 0,
              height: 2
            })
          ]}
        >
          <ContentLoader
            isLoading={animation.hideContentLoader}
            containerStyle={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}
            layout={[
              { width: IMAGE_SIZE, height: IMAGE_SIZE, borderRadius: 40 }
            ]}
          />
          <ResponsiveImage
            imageUrl={user.avatar}
            width={80}
            height={80}
            style={{ borderRadius: 40 }}
            onLoad={handleImageLoading}
          />
        </AvatarContainer>
        <ProfileDetailsContainer>
          <ProfileName>
            {user.name.length > 15
              ? `${user.name.substring(0, 15)}...`
              : user.name}
          </ProfileName>
          <ProfileNumber>{user.phone}</ProfileNumber>
        </ProfileDetailsContainer>
      </ProfileContainer>
      <DrawerContentScrollView {...props}>
        <DrawerItemsContainer>
          <DrawerItemList {...props} />
        </DrawerItemsContainer>
        <SignOutContainer>
          <SignOutButton
            onPress={handleSignOut}
            onPressIn={handleSignOutPressed}
            style={{
              backgroundColor: animation.signOutPressed
                ? colors.FUND_WALLET_COLOR
                : null
            }}
            onPressOut={handleSignOutPressed}
            activeOpacity={0.8}
          >
            <SignOutIcon
              fillColor={colors.BG_LIGHT_COLOR}
              width="25"
              height="25"
            />
            <SignOutText>signout</SignOutText>
          </SignOutButton>
        </SignOutContainer>
      </DrawerContentScrollView>
    </DrawerContainer>
  );
}
