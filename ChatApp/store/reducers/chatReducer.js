import User from '../../User';
const initState = {
    chats: [
        {id: '1', sender0: 'Kanata', content:'Hey there'},
        {id: '2', sender0: 'Brian', content:'Hey there'},
        {id: '3', sender0: 'Kanata', content:'Hey there'},
        {id: '4', sender0: 'Kanata', content:'Hey there'}

    ]
};
//console.log(User.Uid);

const chatReducer = (state = initState, action) => {
    //console.log('hey3');
    //console.log(this.store);
    switch (action.type) {
        case 'CREATE_TEXT':
            console.log('created text', action.text);
            return state;

        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;

        default:
            return state;

    }

};

export default chatReducer;
