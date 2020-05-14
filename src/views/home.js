import * as React from "react";
import {Button} from "react-native";
import {createStackNavigator} from '@react-navigation/stack';

import Exphome from "./exphome";
import Box from "../components/Box";


const HStack = createStackNavigator();

function HomeView({navigation}) {
    return (
        <Box flex={1} justifyContent="center" alignItems="center">
            <Button
                title="Ev Gideri"
                onPress={() => navigation.navigate('Exphome')}/>

            <Box size={50} bg="red"/>
        </Box>
    );
}

function HomeStack() {
    return (
        <HStack.Navigator>
            <HStack.Screen name="Home" options={{headerShown: false}} component={HomeView}/>
            <HStack.Screen name="Exphome" options={{title: 'Ev Gideri'}} component={Exphome}/>
        </HStack.Navigator>
    );
}

export default HomeStack;