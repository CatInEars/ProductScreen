import React from 'react';
import { View, Dimensions } from 'react-native';

import { ProductSlider } from './ProductSlider';
import { ProductInfo } from './ProductInfo';
import { styles } from '../../styles/main';

export function ProductContent() {
  const windowHeight = Dimensions.get('window').height;

  return (
    <View 
      style={[
        styles.productContentContainer, 
        { height: windowHeight < 665 ? '100%' : '83%'}
      ]}
    >
      <ProductSlider />
      <ProductInfo />
    </View>
  );
}