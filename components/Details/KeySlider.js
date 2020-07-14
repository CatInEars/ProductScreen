import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import { styles } from '../../styles/main'

export function KeySlider() {

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.keySlider}
    >
      {
        images.map( (image, index) => (
          <View style={styles.keySliderImageContainer} key={index}>
            <Image source={image} style={styles.keySliderImage}/>
            <View style={styles.keySliderTextContainer}>
              <Text style={styles.keySliderText}>{titles[index]}</Text>
            </View>
          </View>
        ))
      }
    </ScrollView>
  );
}


const images = [
  require('../../images/products/xiaomiPro/KeyFeaturesImages/keyFeaturesImage_1.jpg'),
  require('../../images/products/xiaomiPro/KeyFeaturesImages/keyFeaturesImage_2.jpg'),
  require('../../images/products/xiaomiPro/KeyFeaturesImages/keyFeaturesImage_3.jpg'),
  require('../../images/products/xiaomiPro/KeyFeaturesImages/keyFeaturesImage_4.jpg')
];

const titles = [
  'Ultra-bright headlight',
  'Double brake system',
  'Red tail lights for safe braking',
  '8.5" front and rear pneumatic tires'
]