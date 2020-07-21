import React, { useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Platform,
  Animated,
  Dimensions
} from 'react-native';

import { Banner } from './Banner/Banner';
import { Details } from './Details/Details';
import { ScrollContext } from './others/ScrollContext';

export default function Main() {
  const scrollY = useRef( new Animated.Value(0)).current;
  const windowHeight = Dimensions.get('window').height;

  return (
    <ScrollContext.Provider value={{scrollY}}>
        <SafeAreaView style={(Platform.OS === 'android' ? {marginTop: 30} : null)}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            pagingEnabled={windowHeight < 665 ? false : true}
            onScroll={ Animated.event([{
                nativeEvent: {
                  contentOffset: {
                    y: scrollY
                  }
                }
              }])
            }
          > 
            
            <Banner />
            <Details />
            
          </ScrollView>
        </SafeAreaView>
      </ScrollContext.Provider>
  );
}