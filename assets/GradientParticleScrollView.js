import React from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import WebView from "react-native-webview";

const styles = StyleSheet.create({
    background: {
        flex: 0,
        backgroundColor: 'transparent',
        fontFamily: 'Inter',
        minHeight: Dimensions.get("window").height,
    },
    title: {
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold',
        alignSelf: 'center',
        top: 39,
        margin: 10,
        marginTop: -1 * Dimensions.get('window').height + 10,
        paddingBottom: 50,
    },
    newProjectTouchable: {
        alignSelf: 'center',
        borderRadius: 9,
        width: 335,
        marginVertical: 6,
    },
    newProjectContainer: {
        flexDirection: 'row',
        backgroundColor: '#4D6BD6',
        padding: 12,
        borderRadius: 9,
        justifyContent: 'center',
    },
    newProject: {
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 14,
        color: 'white',
        marginLeft: 10,
    },
    projectTouchable: {
        borderRadius: 10,
        margin: 6,
        marginHorizontal: 10,
    },
    project: {
        backgroundColor: '#2B47A4',
        borderRadius: 10,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    projectTitle: {
        fontSize: 20,
        color: 'white',
    },
    lastModified: {
        fontSize: 12,
        color: 'white',
        opacity: 0.5,
    },
});

export default function GSPView({children}) {
    return <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 1}} colors={['#6783E6', '#7b94fc', '#a9bdfc', '#ADBDF8']}
                           style={styles.background}>
        <ScrollView style={styles.background}>
            <WebView style={{
                backgroundColor: 'transparent',
                height: Dimensions.get('window').height,
                width: Dimensions.get('window').width,
                // position: 'absolute',
                // top: 0,
                // left: 0
            }} source={{uri: 'https://cdn.samyok.us/particles.html'}}/>
            <View style={{marginTop: -1 * Dimensions.get('window').height + 10, backgroundColor: 'red'}}/>
            {children}
        </ScrollView>
    </LinearGradient>
}
