import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { KeySlider } from './KeySlider';

import { styles } from '../../styles/main'

export function KeyFetures() {
  const windowHeight = Dimensions.get('window').height;
  return (
    <View style={styles.keyFeaturesContainer}>
      <Text style={[styles.detailsTextStyle, styles.keyFeturesText]}>Key Features</Text>
      <KeySlider />
    </View>
  );
}

