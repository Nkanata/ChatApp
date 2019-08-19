import User from '../../User';
//import { getFirestore } from 'redux-firestore';
import {firestoreConnect} from 'react-redux-firebase';


const Uid = User.Uid;
//const firestore = getFirestore();
//const contacts = firestore.get('Users/'Uid'/contacts);


   const contacts = firestoreConnect([
        {
            collection: 'Users',
            doc: Uid,
            subcollections: [{collection: 'contacts'}]
        }
    ]);

const initState = {
    contacts
};

const contactReducer = (state= initState, action) => {
    return state;
};
export default contactReducer
