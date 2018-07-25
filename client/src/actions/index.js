import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/currentuser');

  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

// export const fetchQuestionSet = () => async dispatch => {
//   const res = await axios.get('/api/questionSets');

//   dispatch({ payload: res.data });
// };
