import React from 'react';
import { View, Text } from 'react-native';

import { styles } from '../../styles/main';

export function ProductInfo() {
  return (
    <View style={styles.productInfoContainer}>
      <Text style={styles.productNameText}>Mi Electric Scooter Pro</Text>
      <Text style={styles.productPriceText}>$649</Text>
      <Text style={styles.productDescriptionText}>High performance motor.
      Built-in display for convenient monitoring..</Text>
    </View>
  )
}