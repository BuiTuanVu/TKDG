import { LOGIN } from './LoginAction.js'
import { combineReducers } from 'redux';
const init = {
    username: '',
    isLogin: false
}

function demoApp(state = init, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLogin: true,
                username: action.username
            };
        default:
            return state;
    }

}

const rootReducer = combineReducers({
    demoApp
})

export default rootReducer;