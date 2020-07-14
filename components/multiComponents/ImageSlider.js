import React from 'react';
import { 
  View, 
  Image,
} from 'react-native';
import ViewPager from '@react-native-community/viewpager';

export function ImageSlider({ 
  animatedValue, 
  imageContainerStyle, 
  imagesArr, 
  imageStyle, 
  viewStyle
}) {

  return (
    <ViewPager 
      initialPage={0}
      style={viewStyle}
      onPageScroll={e => {
        animatedValue ? animatedValue.setValue(e.nativeEvent.offset + e.nativeEvent.position) : null;
      }
      }
    >
      {
        imagesArr.map((image, index) => (
          <View 
            style={imageContainerStyle}
            key={index} 
          >
            <Image 
              source={image} 
              style={imageStyle}
            />
          </View>
        ))
      }
    </ViewPager>
  );
}