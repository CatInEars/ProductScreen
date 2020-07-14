import React from 'react';
import { View, Animated } from 'react-native';
import { styles } from '../../styles/main';

export function ForImageSliderDots({ imagesArr, animatedValue }) {

  const widthHeight = index => {
    return (animatedValue.interpolate({
      inputRange: [
        index - 1,
        index,
        index + 1
      ],
      outputRange: [7, 10, 7],
      extrapolate: 'clamp'
    }))
  };

  return (
    <View style={styles.dotContainer}>
        {
          imagesArr.map((image, index) => (
            <Animated.View 
            style={[
              styles.dot,
              { 
                width: widthHeight(index), 
                height: widthHeight(index),
                backgroundColor: animatedValue.interpolate({
                  inputRange: [
                    index - 1,
                    index,
                    index + 1
                  ],
                  outputRange: ['lightgray', '#5056DA', 'lightgray'],
                  extrapolate: 'clamp'
                })
              }
            ]} 
            key={index}>

            </Animated.View>
          ))
        }
      </View>
  );
}