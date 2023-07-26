import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNIN_SUCCESS, 
} from '../actions/authActions';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  signupSuccess: false, 
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
      };
    case SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
        signupSuccess: false, 
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        error: null,
        signupSuccess: true, 
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        signupSuccess: false, 
      };
    case SIGNIN_SUCCESS: 
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
