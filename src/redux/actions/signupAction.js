import axios from 'axios';
import { toast } from 'react-toastify';
import { signupTypes } from './types';

const signupUrl = 'https://ireporterch3.herokuapp.com/api/v1/users';

export const signupAction = (
  username,
  firstname,
  lastname,
  othernames,
  email,
  password,
  phonenumber,
) => dispatch => axios.post(signupUrl,
  {
    firstname,
    lastname,
    othernames,
    username,
    email,
    phonenumber: Number(phonenumber),
    password,
  })
  .then((response) => {
    toast.success(':) Your account was created successfuly', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
    dispatch({
      type: signupTypes.SIGNUP_SUCCESS,
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
      type: signupTypes.SIGNUP_ERROR,
      payload: error.response.data,
    });
  });
