import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {WebView} from 'react-native-webview';
import codemirrorHtml from '../assets/codeScreen/html.js';
import codeMirrorJs from '../assets/codeScreen/dist/editor.bundle.js';
import {readFile} from '../assets/FileSystem';

const DEFAULT_CONTENT = `import React from 'react';
import { Text, View } from 'react-native';

const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Hello, world!</Text>
    </View>
  )
 }
export default HelloWorldApp;`;

// const PREVENT_ZOOM = `const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); \``;

const App = ({navigation}) => {
  const file = navigation.getParam('filePath');

  const [loading, setLoading] = useState(true);
  const [initWebViewParams, setInitWebViewParams] = useState({});
  useEffect(() => {
    readFile(file).then(({data, meta}) => {
      console.log(meta);
      setInitWebViewParams({
        initialString: JSON.stringify(data),
        fileName: JSON.stringify(meta.name),
        projectName: JSON.stringify(meta.projectName),
      });
      setLoading(false);
      // console.log(initWebViewParams);
    });
  }, []);

  const initializeContentJs = `
  editor.initializeContent(${
    initWebViewParams.initialString || DEFAULT_CONTENT
  });
  document.getElementById('filename').innerText = ${
    initWebViewParams.fileName || 'unknown'
  };
  document.getElementById('projectName').innerText = ${
    initWebViewParams.projectName || 'Unkown'
  };
  `;
  const initialInjectedJs = `
      ${codeMirrorJs};
      ${initializeContentJs}
  `;
  console.log(initialInjectedJs);

  const fetchContentJs = `
    editor.fetchContent();
  `;

  const webview = React.useRef(null);

  useEffect(() => {
    setTimeout(() => {
      webview.current.injectJavaScript(fetchContentJs);
    }, 5000);
  }, []);

  return (
    <SafeAreaView>
      {loading && <Text>Loading...</Text>}
      {!loading && (
        <WebView
          ref={webview}
          originWhitelist={['*']}
          source={{html: codemirrorHtml}}
          injectedJavaScript={initialInjectedJs}
          onMessage={event => {
            console.log(event.nativeEvent.data);
          }}
          containerStyle={{minHeight: '100%', minWidth: '100%'}}
          onNavigationStateChange={newNavState => {
            console.log({newNavState});

            webview.current.stopLoading();
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default App;
