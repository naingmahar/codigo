import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreenOption} from '../option/home.navoption';
import {CategoriesScreen, Categories} from '../../screen/categories';
import CalculatorScreen from '../../screen/Calculator';

const Stack = createStackNavigator();

export type HomeStackParamList = {
  Home: undefined;
  Products: {
    id: number;
    name: string;
  };
  Details: {
    id: number;
    name: string;
  };
};

export function ProductStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Categories}
        options={HomeScreenOption}
      />
      <Stack.Screen
        name="Calculator"
        component={CalculatorScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
