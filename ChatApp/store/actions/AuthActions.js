export const signUp = (newUser) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.Email,
            newUser.Password
        ).then((resp) => {
            console.log(resp);
            const createUserRef = firestore.collection('Users').doc(resp.user.uid).set({
                UserName: newUser.Name,
                Phone: newUser.PhoneNumber
            });
           // const chatRooms = firestore.collection('Users').doc(resp.user.uid).collection('engagedChats');
            return  createUserRef
        }).then(() => {
            dispatch({ type: 'SIGN_UP SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'SIGN_UP ERROR', err})
        });
    }
};
