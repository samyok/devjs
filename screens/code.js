import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {WebView} from 'react-native-webview';
import codemirrorHtml from '../assets/codeScreen/html.js';
import codeMirrorJs from '../assets/codeScreen/dist/editor.bundle.js';

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

const App = ({initialString, filename, projectName}) => {
  initialString = JSON.stringify(initialString || DEFAULT_CONTENT);
  filename = JSON.stringify(filename || 'hello.js');
  projectName = JSON.stringify(projectName || 'MyProject');

  const initializeContentJs = `
  editor.initializeContent(${initialString});
  document.getElementById('filename').innerText = ${filename};
  document.getElementById('projectName').innerText = ${projectName};
  `;
  const initialInjectedJs = `
      ${codeMirrorJs}
      ${initializeContentJs}
  `;

  const fetchContentJs = `
    editor.fetchContent();
  `;

  const webview = React.useRef(null);

  // setTimeout(() => {
  //   webview.current.injectJavaScript(fetchContentJs);
  // }, 5000);

  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
};

export default App;
