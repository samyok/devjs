import React, {useEffect} from 'react';
import { WebView } from 'react-native-webview';
import RNBootSplash from "react-native-bootsplash";

const Webview = () => {
    useEffect(() => {
        setTimeout(() => {
            RNBootSplash.hide({fade: true});
        }, 1500);

    }, []);
    return (
        <WebView source={{ uri: 'https://google.com/' }}/>
    );
};

export default Webview;