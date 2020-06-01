import React, {useCallback} from 'react';
import { withRouter } from 'react-router-dom';
import app from './../../firebase/base';

const SignIn = ({history}) =>{
  const handleSignIn = useCallback( 
    async (event) =>{
    event.preventDefault();
    const {email, password} = event.target.elements;
    try {
      await app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        history.push('/');
    } catch (error) {
      console.log(`Sign in error: ${error}`);
    }
  }, 
    [history],
  )
  return(
    <div>
      <h1>Sign in</h1>
      <form onSubmit={handleSignIn}>
        <input type="email" name="email" placeholder="email"/>
        <input type="password" name="password" placeholder="password"/>
        <input type="submit" name='submit'/>
      </form>
    </div>
  )
}

export default withRouter(SignIn);