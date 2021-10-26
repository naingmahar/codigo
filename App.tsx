import React, {useContext} from 'react';
import {MainStack} from './src/navigation/AppStack';
import { Provider } from 'react-redux'
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { SafeAreaView, StatusBar, Text,TouchableOpacity } from 'react-native';
import { Color } from './src/res/Color';
import SplashScreen from "react-native-splash-screen";
import { store } from './src/redux';
import { AppBar } from './src/componets/AppBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {

  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500)
  }, []);
  
  return (
    
    <Provider store={store}>
        <StatusBar animated={true} backgroundColor={Color.primary} />
        <SafeAreaProvider>  
          <AppBar />
          <NavigationContainer>
            <MainStack />
          </NavigationContainer>
        </SafeAreaProvider>
    </Provider>
    
  );
};

export default App;
