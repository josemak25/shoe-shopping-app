import React, { useState } from 'react';
import ContentLoader from 'react-native-skeleton-content';
import Animated from 'react-native-reanimated';
import { useThemeContext } from '../../theme';
import Card from '../../components/card';
import applyScale from '../../utils/applyScale';
import ResponsiveImage from '../../libs/responsiveImage';

import { BeneficiaryIconText } from './styles';

interface BenefactorProps {
  testID?: string;
  avatar: string;
  fullName: string;
  id: string;
}

const IMAGE_SIZE = applyScale(30);

export default function Beneficiary(props: BenefactorProps) {
  const { colors, fonts } = useThemeContext();

  const [animation, setAnimation] = useState({
    animateImage: new Animated.Value(0),
    hideContentLoader: true
  });

  const handleImageLoading = (error: any) => {
    if (!error) {
      setAnimation({ ...animation, hideContentLoader: false });
    }
  };

  const handleSelect = () => {};

  return (
    <Card
      style={{
        width: applyScale(80),
        height: applyScale(80),
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 20,
        borderRadius: 3,
        backgroundColor: colors.BG_LIGHT_COLOR
      }}
      activeOpacity={0.6}
      onPress={handleSelect}
    >
      <ContentLoader
        isLoading={animation.hideContentLoader}
        containerStyle={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}
        layout={[{ width: IMAGE_SIZE, height: IMAGE_SIZE, borderRadius: 20 }]}
      />
      <ResponsiveImage
        height={50}
        width={50}
        imageUrl={props.avatar}
        onLoad={handleImageLoading}
      />
      <BeneficiaryIconText
        style={{
          fontSize:
            props.fullName.length > 12
              ? fonts.SMALL_SIZE - 2
              : fonts.SMALL_SIZE - 1
        }}
      >
        {props.fullName}
      </BeneficiaryIconText>
    </Card>
  );
}
