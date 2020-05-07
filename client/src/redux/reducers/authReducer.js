const INIT_STATE = {isSignedIn: null, userId: null};

const authReducer = (state=INIT_STATE, action) => {
    switch(action.type) {
        case 'SIGNED_IN':
            return {
                ...state,
                isSignedIn: true,
                userId: action.payload
            };
        case 'SIGNED_OUT':
            return {
                ...state,
                isSignedIn: false,
                userId: null
            };
        default:
            return state;
    };
};

export default authReducer;