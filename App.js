/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useEffect} from "react";
import Projects from './screens/Projects';

import type {Node} from "react";
import nodejs from 'nodejs-mobile-react-native';
import RNBootSplash from "react-native-bootsplash";


const App: () => Node = () => {
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
        <Projects/>
    );
};


export default App;
