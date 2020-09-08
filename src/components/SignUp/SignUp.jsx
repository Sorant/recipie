import React, { useCallback } from 'react'
import { withRouter } from 'react-router-dom';
import app from './../../firebase/base';

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push('/sign-in');
      } catch (error) {
        console.log(`Sign up error ${error}`)
      }
    },
    [history],
  )
  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <input type="text" name='email' placeholder='email' />
        <input type="password" name='password' placeholder='password' />
        <input type="submit" name='submit' />
      </form>
    </div>
  )
}

export default withRouter(SignUp);