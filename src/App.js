import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';
import { AuthProvider } from './firebase/Auth';
import PrivateRoute from './firebase/PrivateRoute';
import SignIn from './components/SignIn/SignIn';

const App = () =>{

  return(
    <AuthProvider>
      <Router>
        <Link to="/sign-in">Sign in</Link>
        <Link to="/sign-up">Sign up</Link>
        <Switch>
          <PrivateRoute exact  path='/' component={Home}></PrivateRoute>
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </AuthProvider>
  )  
}

export default App;