import {EditorState, EditorView, basicSetup} from '@codemirror/basic-setup';
import {javascript} from '@codemirror/lang-javascript';
import {oneDark} from '@codemirror/theme-one-dark';

window.editor = {
  view: new EditorView({
    state: EditorState.create({
      extensions: [basicSetup, javascript(), oneDark],
    }),
    parent: document.body,
  }),
  initializeContent: content => {
    const view = window.editor.view;
    view.dispatch(
      view.state.update({
        changes: {
          from: 0,
          insert: content,
        },
      }),
    );
  },
  fetchContent: () => {
    console.log('fetching!');
    window.ReactNativeWebView.postMessage(
      window.editor.view.state.doc.toString(),
    );
  },
};
