import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// Action Types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';

// Action Creators for Sign-Up
export const signupRequest = () => {
  return {
    type: SIGNUP_REQUEST,
  };
};

export const signupSuccess = (user) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: user,
  };
};

export const signupFailure = (error) => {
  return {
    type: SIGNUP_FAILURE,
    payload: error,
  };
};

// Action Creators
export const signinRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const signinSuccess = (user) => {
  return {
    type: SIGNIN_SUCCESS,
    payload: user,
  };
};

export const signinFailure = (error) => {
  return {
    type: SIGNIN_FAILURE,
    payload: error,
  };
};

export const signoutSuccess = () => {
  return {
    type: SIGNOUT_SUCCESS,
  };
};

export const signinUser = (email, password) => {
  return (dispatch) => {
    dispatch(signinRequest());

    // Initialize Firebase app
    const firebaseConfig = {
      apiKey: "AIzaSyDjxPLS7gSLoUVAcd7gju7gHIYefaxFS6A",
      authDomain: "weather-app-375b5.firebaseapp.com",
      projectId: "weather-app-375b5",
      storageBucket: "weather-app-375b5.appspot.com",
      messagingSenderId: "350073201404",
      appId: "1:350073201404:web:a148fa5c3b7324a6386d79",
      measurementId: "G-117SVT71H7"
    };
    const firebaseApp = initializeApp(firebaseConfig);
    const auth = getAuth(firebaseApp);

    // Sign in with email and password
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(signinSuccess(user));
      })
      .catch((error) => {
        dispatch(signinFailure(error.message));
      });
  };
};

// Async Action Creator for User Sign-Out
export const signoutUser = () => {
  return (dispatch) => {
    // Initialize Firebase app
    const firebaseConfig = {
      apiKey: "AIzaSyDjxPLS7gSLoUVAcd7gju7gHIYefaxFS6A",
      authDomain: "weather-app-375b5.firebaseapp.com",
      projectId: "weather-app-375b5",
      storageBucket: "weather-app-375b5.appspot.com",
      messagingSenderId: "350073201404",
      appId: "1:350073201404:web:a148fa5c3b7324a6386d79",
      measurementId: "G-117SVT71H7"
    };
    const firebaseApp = initializeApp(firebaseConfig);
    const auth = getAuth(firebaseApp);

    signOut(auth)
      .then(() => {
        dispatch(signoutSuccess());
      })
      .catch((error) => {
        console.log('Sign Out Error:', error);
      });
  };
};

export const signupUser = (email, password) => {
  return (dispatch) => {
    dispatch(signupRequest());

    // Initialize Firebase app
    const firebaseConfig = {
      apiKey: "AIzaSyDjxPLS7gSLoUVAcd7gju7gHIYefaxFS6A",
      authDomain: "weather-app-375b5.firebaseapp.com",
      projectId: "weather-app-375b5",
      storageBucket: "weather-app-375b5.appspot.com",
      messagingSenderId: "350073201404",
      appId: "1:350073201404:web:a148fa5c3b7324a6386d79",
      measurementId: "G-117SVT71H7"
    };
    const firebaseApp = initializeApp(firebaseConfig);
    const auth = getAuth(firebaseApp);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(signupSuccess(user));
      })
      .catch((error) => {
        dispatch(signupFailure(error.message));
      });
  };
};