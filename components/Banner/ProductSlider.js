import React, { useRef } from 'react';
import { View, Animated,  Dimensions} from 'react-native';

import { ImageSlider } from '../multiComponents/ImageSlider';
import { ForImageSliderDots } from '../multiComponents/ForImageSliderDots';

import { styles } from '../../styles/main';

export function ProductSlider() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={styles.sliderContainer}>

      <ImageSlider 
        imagesArr={images}
        animatedValue={scrollX}
        viewStyle={[styles.viewPager, {width: windowWidth}]}
        imageContainerStyle={[styles.imageContainer, {width: windowWidth}]}
        imageStyle={[styles.image, {width: '100%'}]}
      />

      <ForImageSliderDots 
        imagesArr={images}
        animatedValue={scrollX}
      />

    </View>
  );
}

const images = [
  require('../../images/products/xiaomiPro/BannerImages/image1.jpg'),
  require('../../images/products/xiaomiPro/BannerImages/image2.jpg'),
  require('../../images/products/xiaomiPro/BannerImages/image3.jpg'),
  require('../../images/products/xiaomiPro/BannerImages/image4.jpg')
];

