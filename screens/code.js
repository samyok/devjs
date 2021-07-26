import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableHighlight, View,} from 'react-native';
import {WebView} from 'react-native-webview';
import {ArrowSmLeftIcon} from 'react-native-heroicons/outline';
import codemirrorHtml from '../assets/codeScreen/html.js';
import codeMirrorJs from '../assets/codeScreen/dist/editor.bundle.js';
import {copyRecursive, readFile, writeFile} from '../assets/FileSystem';
import nodejs from "nodejs-mobile-react-native";

const DEFAULT_CONTENT = `console.log('hello world!')`;

// const PREVENT_ZOOM = `const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); \``;

const App = ({navigation}) => {
    const file = navigation.getParam('filePath');

    const [loading, setLoading] = useState(true);
    const [initWebViewParams, setInitWebViewParams] = useState({});
    useEffect(() => {
        readFile(file).then(({data, meta}) => {
            setInitWebViewParams({
                initialString: JSON.stringify(data),
                fileName: meta.name,
                projectName: meta.projectName,
            });
            setLoading(false);
        });
    }, []);

    const [nodeDir, setNodeDir] = useState('');

    useEffect(() => {
        nodejs.start("__devjs__mobile__node__compiled.js");
        nodejs.channel.addListener(
            "message",
            (msg) => {
                console.log("From node: " + msg);
            }
        );
        console.log(file);
        nodejs.channel.post('dir', file);
        nodejs.channel.addListener('dir', dir => {
            console.log({dir});
            setNodeDir(dir)
        });
    }, [])


    function runThisScript(){
        // copy and paste all files to `nodeDir`
        console.log(initWebViewParams.projectName, nodeDir);
        console.log(JSON.parse(initWebViewParams.initialString));
        copyRecursive(initWebViewParams.projectName, nodeDir).then(() => {
            nodejs.channel.post("script", JSON.parse(initWebViewParams.initialString));
            console.log('sending script');
        })
    }

    const initializeContentJs = `
  editor.initializeContent(${
        initWebViewParams.initialString || DEFAULT_CONTENT
    });
  `;
    const initialInjectedJs = `
      ${codeMirrorJs}
      ${initializeContentJs}
  `;

    const webview = React.useRef(null);

    const fetchContentJs = `
    editor.fetchContent();
  `;

    function fetchContent() {
        webview.current.injectJavaScript(fetchContentJs);
    }

    return (
        <SafeAreaView>
            {loading && <Text>Loading...</Text>}
            {!loading && (
                <>
                    <View style={styles.header}>
                        <TouchableHighlight
                            onPress={() => {
                                navigation.goBack();
                                fetchContent();
                            }}
                            underlayColor="black">
                            <View style={styles.projectGroup}>
                                <ArrowSmLeftIcon color="#FFF" size={18}/>
                                <Text style={styles.projectName}>
                                    {initWebViewParams.projectName || 'Unknown'}
                                </Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={runThisScript.bind(this)}
                            underlayColor="black">
                            <View style={styles.projectGroup}>
                                <ArrowSmLeftIcon color="#FFF" size={18}/>
                                <Text style={styles.projectName}>
                                    Run
                                </Text>
                            </View>
                        </TouchableHighlight>
                        <Text style={styles.filename}>
                            {initWebViewParams.fileName || 'unknown'}
                        </Text>
                    </View>
                    <WebView
                        ref={webview}
                        originWhitelist={['*']}
                        source={{html: codemirrorHtml}}
                        injectedJavaScript={initialInjectedJs}
                        onMessage={event => {
                            console.log('received data:', event.nativeEvent.data);
                            // this is where the editor content is returned
                            // after calling fetchContent()
                            writeFile(file, event.nativeEvent.data).then();
                        }}
                        containerStyle={{minHeight: '100%', minWidth: '100%'}}
                    />
                </>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        top: 0,
        zIndex: 5,
        backgroundColor: '#2B47A4',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 24,
        paddingRight: 24,
        flexDirection: 'row',
    },
    projectGroup: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    projectName: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '700',
        marginLeft: 4,
    },
    filename: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '400',
    },
});

export default App;
