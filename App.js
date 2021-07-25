/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import nodejs from 'nodejs-mobile-react-native';

import type {Node} from "react";
import React, {useEffect} from "react";
import RNBootSplash from "react-native-bootsplash";

import {StyleSheet, Text, useColorScheme, View} from "react-native";

import {Colors,} from "react-native/Libraries/NewAppScreen";

import Projects from './screens/code';


const Section = ({children, title}): Node => {
    const isDarkMode = useColorScheme() === "dark";


    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}>
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}>
                {children}
            </Text>
        </View>
    );
};

const App: () => Node = () => {
    const isDarkMode = useColorScheme() === "dark";

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    // RNBootSplash.hide({fade: true});
    useEffect(() => {
        setTimeout(() => {
            RNBootSplash.hide({fade: true});
        }, 1500);

    }, []);

    useEffect(() => {

        nodejs.start("main.js");
        nodejs.channel.addListener(
            "message",
            (msg) => {
                console.log("From node: " + msg);
            }
        );
    }, [])
    return (
        <Projects/>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "600",
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: "400",
    },
    highlight: {
        fontWeight: "700",
    },
});

export default App;
