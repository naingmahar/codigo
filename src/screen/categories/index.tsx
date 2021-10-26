import React, {useEffect, useMemo, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {getCategories} from '../../lib/API/api';
import {Color} from '../../res/Color';
import {styles} from './styles';
import {NavigationProp} from '@react-navigation/native';
import { CategoryItem } from '../../componets/CategoryItem';
import { useDispatch,useSelector } from 'react-redux';
import { addCategories, chooseCategory, RootState } from '../../redux'


export const Categories = ({
  navigation,
}: {
  navigation: NavigationProp<any, any>;
}) => {
  const dispatch = useDispatch();
  // const { categories } = useSelector((state: RootState) => state.categories)
  const { categories } = useSelector((state: RootState) => state)
  

  function refreshFeed() {
    dispatch(addCategories())
  }

  useEffect(() => {
    refreshFeed()
  }, []);

  const _onPress = (currency:string) => {
    dispatch(chooseCategory(currency))
    navigation.navigate("Calculator")
  }

  return (
    <View style={{flex: 1, marginTop: 10}}>
      <FlatList
        data={categories.categories}
        numColumns={2}
        renderItem={({item})=><CategoryItem item={item} cb={_onPress} />}
        keyExtractor={(item) => Object.keys(item)[0]}
      />
    </View>
  );
};
