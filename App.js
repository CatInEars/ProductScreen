import React, { useRef } from 'react';
import {
  ScrollView,
  SafeAreaView,
  Platform,
  Animated,
  Dimensions
} from 'react-native';

import { Banner } from './components/Banner/Banner';
import { Details } from './components/Details/Details';
import { ErrorBoundary } from './components/others/ErrorBoundary';
import { ScrollContext } from './components/others/ScrollContext';

export default function App() {
  const scrollY = useRef( new Animated.Value(0)).current;
  const windowHeight = Dimensions.get('window').height;
  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  )
}