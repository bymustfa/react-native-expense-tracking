import * as React from 'react';
import {Text, View} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import FullScreen from 'react-native-full-screen'


import HomeStack from './views/home';
import ProductList from './views/productList';
import MarketList from './views/marketList';
import Settings from './views/settings';

FullScreen.offFullScreen()
const Tab = createBottomTabNavigator();


function App() {

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Gider Ekle" component={HomeStack}/>
                <Tab.Screen name="Ürün Listesi" component={ProductList}/>
                <Tab.Screen name="Market Listesi" component={MarketList}/>
                <Tab.Screen name="Ayarlar" component={Settings}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;