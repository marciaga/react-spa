import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import rootReducer from './reducers/';
import App from './components';

const devMiddleware = typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f;
const initialState = {};
const store = createStore(rootReducer, initialState, devMiddleware);

render(
    <Provider store={store}>
        <Router children={routes} history={browserHistory} />
    </Provider>
    ,document.getElementById('app')
);
