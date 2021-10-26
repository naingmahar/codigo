import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import { ProductStack } from './stacks/ProductStackNav';

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

export type RootStackParamList = {
  Main: undefined;
  congrat: undefined;
};

export function MainStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={ProductStack}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Details"
        component={ProductDetails}
        options={ProductScreenOption}
      /> */}
    </Stack.Navigator>
  );
}


