import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { AuthProvider } from '../../firebase/Auth';
import PrivateRoute from '../../firebase/PrivateRoute';
import Home from './../Home/Home';
import SignIn from '../SignIn/index';
import SignUp from '../SignUp/index';

const GreetingPage = () => {
  return (
    <AuthProvider>
      <Router>
        <Link to="/sign-in">Click</Link>
        <Route exact path="/sign-in" component={SignIn} />
        <Route path="/home" component={Home}></Route>
      </Router>
      {/* <Router>
        <Link to="/sign-in">Sign in</Link>
        <Link to="/sign-up">Sign up</Link>
        <Switch>
          <PrivateRoute exact path='/' component={Home}></PrivateRoute>
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
        </Switch>
      </Router> */}
    </AuthProvider>
  )
}

export default GreetingPage;