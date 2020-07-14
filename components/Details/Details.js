import React from 'react';
import { View, Dimensions } from 'react-native';
import { KeyFetures } from './KeyFetures';
import { BuyButton } from './BuyButton';
import { Specifications } from './Specifications';

import { styles } from '../../styles/main';

export function Details() {
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={[
        styles.detailsContainer, 
        {
          minHeight: windowHeight < 665 ? windowHeight : windowHeight - 155
        }
      ]}
    >
      <KeyFetures />
      <Specifications />
      <BuyButton />
    </View>
  );
}