import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signinUser, signupUser } from '../actions/authActions';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();
  const signupSuccess = useSelector((state) => state.auth.signupSuccess);
  const users = useSelector((state) => state.auth.users); 

  const isEmailRegistered = (email) => {
    return users.some((user) => user.email === email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      if (isEmailRegistered(email)) {
        alert('Email is already registered. Please sign in.');
      } else {
        dispatch(signupUser(email, password));
      }
    } else {
      dispatch(signinUser(email, password));
    }
  };

  return (
    <div className="signin">
      <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
      {signupSuccess && <p>Sign up successful! You can now sign in.</p>}
      <div className="signin-form">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
        </form>
        <p>
          {isSignUp
            ? 'Already have an account?'
            : 'Don’t have an account yet?'}
          <span
            onClick={() => setIsSignUp(!isSignUp)}
            style={{ cursor: 'pointer' }}
          >
            {isSignUp ? ' Sign In' : ' Sign Up'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
