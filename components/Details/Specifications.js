import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { YellowBox } from 'react-native';

import { styles } from '../../styles/main';

// Насколько я нашел на stackoverflow, этот варнинг решается только так, но мне кажется что у меня iq = 7
YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);

export function Specifications() {
  return (
    <View style={{marginBottom: '10%'}}>
      <Text style={styles.detailsTextStyle}>Specifications Rate</Text>
      <View>
        <FlatList 
          data={specificationsData}
          renderItem={({item}) => (
            <View style={styles.detailsSpecificationsBlock} key={item.id}>
              <Text style={[styles.detailsSpecificationsBlockText, {width: 55}]}>{item.name}</Text>
              <View style={styles.detailsBlockLineContainer}>
                <View style={[styles.detailsBlockLine, {width: item.lineWidth}]}></View>
              </View>
              <Text style={styles.detailsSpecificationsBlockText}>{item.value}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
} 

const specificationsData = [
  {name: 'Wheel', value: '200 mm', lineWidth: '65%', id: '1'},
  {name: 'Weight', value: '5.6 kg', lineWidth: '30%', id: '2'},
  {name: 'Speed', value: '9.5/10', lineWidth: '90%', id: '3'}
]