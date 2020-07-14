import React, { useState, useRef } from 'react';
import { TouchableHighlight, Animated } from 'react-native';

import { ActivityLiked } from '../icons/ActivityLiked';
import { UnActivityLiked } from '../icons/UnActivityLiked';

export function HeartButton() {
  const [liked, setLiked] = useState(false);
  const heartScaleProcess = useRef(new Animated.Value(0)).current;

  const onPress = () => {
    setLiked(!liked);

    heartScaleProcess.setValue(0);
    Animated.timing( heartScaleProcess, {
      duration: 200,
      toValue: 1
    }).start();
  }

  // задает ширину блока для увелечения масштаба
  const widthHeight = heartScaleProcess.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [30, 36, 30]
  });

  // для более приятного визуального эффекта
  const marginRight = heartScaleProcess.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -3, 0]
  });

  return (
    <TouchableHighlight 
      underlayColor={null} 
      activeOpacity={1} 
      onPress={onPress}
    >
      {
        liked
        ? 
        <Animated.View style={
          {
            width: widthHeight, 
            height: widthHeight, 
            marginRight
          }
        }>
          <ActivityLiked />
        </Animated.View>

        : 

        <Animated.View style={
          {
            width: widthHeight, 
            height: widthHeight, 
            marginRight
          }
        }>
          <UnActivityLiked />
        </Animated.View>
      }
    </TouchableHighlight>      
  );
}