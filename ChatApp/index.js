/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react'
import App from './App';
import {name as appName} from './app.json';

import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import { reactReduxFirebase, getFirebase} from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';

import rootReducer from './store/reducers/rootReducer';
import fbConfig from './config/fbConfig'

const store = createStore(rootReducer,
    compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reactReduxFirebase(fbConfig, {attachAuthIsReady: true}),
        reduxFirestore(fbConfig)
    )
);

    const RNRedux = () => (
            <Provider store={store}>
                <App/>
            </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);




