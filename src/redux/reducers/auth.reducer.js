import * as types from "../constants/auth.constants";

const initialState = {
    email: ``,
    isSignedIn: false,
};

const authReducer = (state = initialState, action) => {
    const { type, payload } = action;
    console.log({ type, hello: types.SIGN_IN })
    switch (type) {
        case types.SIGN_IN:
            return {
                isSignedIn: true,
                auth: payload.email,
            };
        case types.SIGN_OUT:
            return {
                isSignedIn: false,
                auth: null,
            };

        default:
            return state;
    }
};

// function authReducer(state = initialState, action) {
//     switch (action.type) {
//         case "SIGN_IN":
//             return {
//                 isSignedIn: true,
//                 email: action.payload.email,
//             };
//         case "SIGN_OUT":
//             return {
//                 isSignedIn: false,
//                 email: null,
//             };
//         default:
//             return state;
//     }
// }

export default authReducer;