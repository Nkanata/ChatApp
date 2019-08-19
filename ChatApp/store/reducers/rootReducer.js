import authReducer from './AuthReducer';
import chatReducer from './chatReducer';
import contactReducer from './contactReducer';
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    chat: chatReducer,
    contacts: contactReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

export default rootReducer
