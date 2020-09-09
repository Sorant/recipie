import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './firebase/Auth';
import PrivateRoute from './firebase/PrivateRoute';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/index';
import GoToSignIn from './components/GoToSignIn/GoToSignIn';
import SignUp from './components/SignUp/index';

const App = (props) => {

  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={GoToSignIn} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route path="/home" component={Home} />
        </Switch>
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
    </AuthProvider >
  )
}

export default (App);