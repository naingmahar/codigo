import React from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  View,
} from 'native-base';
import {Color} from '../../res/Color';
import {TouchableOpacity} from 'react-native';
import getSymbolFromCurrency from 'currency-symbol-map'
import { chooseCategory, TCategory } from '../../redux';
export const CategoryItem = ({
  item,
  cb
}: {
    item: TCategory;
    cb:(currency:string)=>void
  }) => {
  
  
  return (
    <TouchableOpacity
      onPress={() =>cb(Object.keys(item)[0])}
      style={{
        flex:1,
        backgroundColor: Color.background,
        borderRadius: 5,
        padding: 10,
        margin: '1.5%',
      }}>
      <View
        style={{justifyContent: 'center', alignItems: 'center'}}
      >
        <Text
          numberOfLines={2}
          style={{fontSize: 20, fontWeight: 'bold', color: Color.primary}}>
          {getSymbolFromCurrency(Object.keys(item)[0])}
        </Text>
        <Text
          numberOfLines={2}
          style={{fontSize: 13, color: '#808080'}}>
          {Object.values(item)[0]}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
