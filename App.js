/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";

// import components
import Projects from './screens/Projects';
import Files from './screens/Files';
import NewProject from './screens/NewProject';
import NewFile from './screens/NewFile';
import Editor from './screens/code';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator(
    {
        Projects: Projects,
        NewProject: NewProject,
        NewFile: NewFile,
        Files: Files,
        Editor: Editor
    },
    {
        initialRouteName: 'Projects',
        defaultNavigationOptions: {
            headerShown: false,
        },
    }
);

const AppContainer = createAppContainer(AppNavigator);
const App = () => {
    return <AppContainer />;
}
export default App;

// import nodejs from 'nodejs-mobile-react-native';

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
