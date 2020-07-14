import React from 'react';
import { View, Dimensions } from 'react-native';

import { Title } from './Title';
import { ProductContent } from './ProductContent';
import { ShowDetails } from './ShowDetails';

export function Banner() {
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={{height: (windowHeight < 665 ? windowHeight - 65 : windowHeight)}}>

      <Title />
      <ProductContent />
      {windowHeight < 665 ? null : <ShowDetails /> }

    </View>
  );
}