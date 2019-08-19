
const initState = {
    authError: null
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login success');
            return {
                ...state,
                authError: 'Login Failed'
            };
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError: null,
            };

        case 'SIGN_UP SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError: null
            };

        case 'SIGN_UP ERROR':
            console.log('sign up error',);
            return {
                ...state,
                authError: action.err.message
            };

        default:
            return state;

    }
};

export default authReducer;
