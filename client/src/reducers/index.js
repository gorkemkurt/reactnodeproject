import { combineReducers } from 'redux';
import authReducer from './authReducer';
import questionSetReducer from './questionSetReducer';

export default combineReducers({
    auth: authReducer,
    questionSet: questionSetReducer
});