import React, { useCallback } from 'react';
// import { withRouter, Router } from 'react-router-dom';
import { Link, withRouter } from 'react-router-dom';
import app from './../../firebase/base';

const SignIn = ({ history }) => {
  const handleSignIn = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value)
        history.push('/home');
      } catch (error) {
        console.log(`Sign in error: ${error}`);
      }
    },
    [history],
  )
  return (
    <div>
      <h1>Sign in</h1>
      <form onSubmit={handleSignIn}>
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <input type="submit" name='submit' />
      </form>
      <Link to="/sign-up">Sign up</Link>
    </div>
  )
}

export default withRouter(SignIn);