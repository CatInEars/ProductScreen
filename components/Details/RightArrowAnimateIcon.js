import React, { useState, useRef, useEffect } from 'react';
import { ArrowIcon } from '../icons/ArrowIcon';
import { Animated } from 'react-native';

import { styles } from '../../styles/main';

export function RightArrowAnimateIcon() {
  const [ rockingEnded, setRockingPos ] = useState(false);
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
        marginRight: rocking.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 5]
        })
      }} 
    >
      <ArrowIcon style={styles.rightArrow} fill='black' />
    </Animated.View>
  )
}