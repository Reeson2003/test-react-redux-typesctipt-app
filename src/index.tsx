import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App, { reducer} from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import './index.css';

import { Provider } from 'react-redux';

const createStoreRedux = window['devToolsExtension'] ? window['devToolsExtension']()(createStore) : createStore;
const store = createStoreRedux(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
