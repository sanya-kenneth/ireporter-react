import axios from 'axios';
import { toast } from 'react-toastify';
import { loginTypes } from './types';

const signupUrl = 'https://ireporterch3.herokuapp.com/api/v1/users/login';

export const loginAction = (email, password) => dispatch => axios.post(signupUrl,
  {
    email,
    password,
  })
  .then((response) => {
    toast.success(':) You have successfuly loggedin', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
    dispatch({
      type: loginTypes.LOGIN_SUCCESS,
      payload: response.data,
    });
    setTimeout(() => { window.location.href = '/viewreports'; }, 4000);
  })
  .catch((error) => {
    toast.error(`:( ${error.response.data.error}`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 4000,
    });
    dispatch({
      type: loginTypes.LOGIN_ERROR,
      payload: error.response.data,
    });
  });
