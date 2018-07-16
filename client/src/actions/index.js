import axios from 'axios';
// import { FETCH_USER, FETCH_SURVEYS } from './types';

export const fetchQuestionSet = () => async dispatch => {
  const res = await axios.get('/api/questionSets');

  dispatch({ payload: res.data });
};
