import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from "redux";
import './index.css';

import {Provider} from "react-redux";
import reducer from "./store"

const enhancer = window['devToolsExtension'] ? window['devToolsExtension']()(createStore) : createStore;

const store = enhancer(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
