import axios from 'axios';
import { FETCH_USER, FETCH_QUESTION_SET } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/currentuser');

  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const fetchQuestionSet = () => async dispatch => {
  const res = await axios.get('/api/questionSets');

  dispatch({
    type: FETCH_QUESTION_SET,
    payload: res.data
  });
};
