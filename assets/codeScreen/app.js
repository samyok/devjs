import {Compartment} from '@codemirror/state';
import {EditorState, EditorView, basicSetup} from '@codemirror/basic-setup';
import {javascript} from '@codemirror/lang-javascript';
import {css} from '@codemirror/lang-css';
import {html} from '@codemirror/lang-html';
import {oneDark} from '@codemirror/theme-one-dark';

const languageConf = new Compartment();

window.editor = {
  view: new EditorView({
    state: EditorState.create({
      extensions: [basicSetup, languageConf.of([]), oneDark],
    }),
    parent: document.body,
  }),
  initializeContent: (content, fileExt) => {
    const view = window.editor.view;
    view.dispatch(
      view.state.update({
        changes: {
          from: 0,
          insert: content,
        },
      }),
    );

    let lang;
    switch (fileExt) {
      case 'js':
        lang = javascript();
        break;
      case 'css':
        lang = css();
        break;
      case 'html':
        lang = html();
        break;
      default:
        break;
    }
    if (lang) {
      view.dispatch(
        view.state.update({
          effects: languageConf.reconfigure(lang),
        }),
      );
    }
  },
  fetchContent: () => {
    console.log('fetching!');
    window.ReactNativeWebView.postMessage(
      window.editor.view.state.doc.toString(),
    );
  },
};
