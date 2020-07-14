import React, { useContext } from 'react';
import { Text, View, Animated, Dimensions } from 'react-native';

import { DownArrowAnimation } from './DownArrowAnimation';
import { ScrollContext } from '../others/ScrollContext';

import { styles } from '../../styles/main';

export function ShowDetails() {
  const { scrollY } = useContext(ScrollContext);
  const windowHeight = Dimensions.get('window').height;
  // тут небольшой костыль, но по другому никак
  return (
    <Animated.View 
      style={
        [styles.showDetails, { 
          bottom: scrollY.interpolate({
            inputRange: [0, windowHeight],
            outputRange: [-3, 145]
          })
        }]
      }
    >
      <View style={styles.showDetailsTextContainer}>
        <Text style={styles.showDetailsText}>Show Details</Text>
      </View>

      <DownArrowAnimation />
    </Animated.View>
  );
}