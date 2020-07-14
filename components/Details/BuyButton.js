import React from 'react';
import { 
  Text,
  View,
  ToastAndroid
 } from 'react-native';
import { RightArrowAnimateIcon } from './RightArrowAnimateIcon';
import Ripple from 'react-native-material-ripple';

import { styles } from '../../styles/main';

export function BuyButton() {
  const showToast = () => {
    ToastAndroid.show('Ну тип купил)', ToastAndroid.SHORT);
  };

  return (
    <Ripple
      style={styles.buyButtonContainer}
      onPress={() => showToast()}
      rippleDuration={500}
      rippleOpacity={0.3}
      rippleColor='#FFFFFF'
    >
      <View style={styles.buyButton}>
        <View style={styles.buyButtonTextContainer}>
          <Text style={styles.buyButtonText}>Buy now</Text>
        </View>
        <RightArrowAnimateIcon />
      </View>
    </Ripple>
  );
}