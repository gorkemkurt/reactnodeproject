import { FETCH_QUESTION_SET } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_QUESTION_SET:
            return action.payload || false;
        default:
            return state;
    }
}