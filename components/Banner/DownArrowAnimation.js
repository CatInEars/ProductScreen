import React, { useState, useEffect, useRef } from 'react';
import { Animated } from 'react-native';

import { ArrowIcon } from '../icons/ArrowIcon';

import { styles } from '../../styles/main';

export function DownArrowAnimation() {
  const [rockingEnded, setRockingPos] = useState(false)
  const rocking = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    
    if(rockingEnded) {
      Animated.timing(rocking, {
        toValue: 0,
        duration: 2000
      }).start(() => {
        setRockingPos(false)
      });
    } else {
      Animated.timing(rocking, {
        toValue: 1,
        duration: 2000
      }).start(() => {
        setRockingPos(true)
      });
    }
  }, [rockingEnded]);

  

  return (
    <Animated.View 
      style={{
        marginBottom: rocking.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 10]
        })
      }} 
    >
      <ArrowIcon style={styles.downArrow} fill='white' />
    </Animated.View>
  )
}