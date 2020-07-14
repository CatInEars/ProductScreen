import React from 'react';
import { View, Text } from 'react-native';

import { HamburgerIcon } from '../icons/HamburgerIcon';
import { HeartButton } from './HeartButton'

import { styles } from '../../styles/main';

export function Title() {
  return (
    <View style={styles.titleOnBannerContainer}>
      <HamburgerIcon />
      <View style={styles.titleOnBannerTextContainer}>
        <Text style={styles.titleOnBannerText}>Electric Scooter Pro</Text>
      </View>
      <HeartButton />
    </View>  
  );
}