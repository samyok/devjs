/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

// import type {Node} from "react";
import React, {useEffect} from "react";
import {Text, View} from 'react-native';
import Projects from './screens/Projects';

import RNBootSplash from "react-native-bootsplash";
import nodejs from 'nodejs-mobile-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function HomeScreen() {
    useEffect(() => {
        setTimeout(() => {
            RNBootSplash.hide({fade: true});
        }, 1500);

    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

const Stack = createStackNavigator();

const App = () => {
    useEffect(() => {
        setTimeout(() => {
            RNBootSplash.hide({fade: true});
        }, 1500);

        nodejs.start("main.js");
        nodejs.channel.addListener(
            "message",
            (msg) => {
                alert("From node: " + msg);
            }
        );
    }, []);
    return (
        <NavigationContainer>
            {/*<Projects/>*/}
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default App;
