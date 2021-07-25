/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from "react";
import Projects from './screens/Projects';
import Files from './screens/Files';
import NewProject from './screens/NewProject';
import NewFile from './screens/NewFile';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import type {Node} from "react";
// import nodejs from 'nodejs-mobile-react-native';
// import RNBootSplash from "react-native-bootsplash";

// create a stack navigator
// const Stack = createStackNavigator();

// const App = () => {
//     useEffect(() => {
//         setTimeout(() => {
//             RNBootSplash.hide({fade: true});
//         }, 1500);
//
//         nodejs.start("main.js");
//         nodejs.channel.addListener(
//             "message",
//             (msg) => {
//                 alert("From node: " + msg);
//             }
//         );
//     }, []);
//     return (
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName={'ProjectsScreen'}>
//                 <Stack.Screen name='ProjectsScreen' component={Projects} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// };

const AppNavigator = createStackNavigator(
    {
        Projects: Projects,
        NewProject: NewProject,
        NewFile: NewFile,
        Files: Files,
        // Editor:
    },
    {
        initialRouteName: 'Projects',
    }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
    return <AppContainer />;
}

// export default class App extends React.Component {
//     render() {
//         return <AppContainer />;
//     }
// }

export default App;
