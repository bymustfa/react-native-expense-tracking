import * as React from "react";
import {Text, View, Button} from "react-native";

import {createStackNavigator} from '@react-navigation/stack';

import Exphome from "./exphome";

const HStack = createStackNavigator();

function HomeView({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button
                title="Ev Gideri"
                onPress={() => navigation.navigate('Exphome')}
            />
        </View>
    );
}

function HomeStack() {
    return (
        <HStack.Navigator  >
            <HStack.Screen name="Home" options={{headerShown: false}} component={HomeView}/>
            <HStack.Screen name="Exphome" options={{ title: 'Ev Gideri' }} component={Exphome}/>
        </HStack.Navigator>
    );
}

export default HomeStack;