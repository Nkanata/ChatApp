export const createText = (text) => {
    const textid = text.sender + text.receiver;
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();
        firestore.collection('Texts').doc(textid).add({
            ...text,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_TEXT', text });
        }).catch((err) => {
            dispatch({type: 'CREATE_TEXT_ERROR', err });
        })
    }
};
