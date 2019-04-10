import React, { Component } from 'react';
import Login from './LoginPage';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import PrivateRoute from './PrivateRoute';
import HomePage from './HomePage';

class App extends Component {

  /* The react private route component renders a route component 
  if the user is logged in, otherwise it redirects the user 
  to the /login page.

 The way it checks if the user is logged in is by checking
 that there is a user object in local storage. 
 While it's possible to bypass this check by manually a
 dding an object to local storage using browser dev tools, 
 this would only give access to the client side component,
  it wouldn't give access to any real secure data from the 
  server api because valid user credentials are required 
  for this. */
  render() {
    return (
      <div className="App">
      <Router>
        <PrivateRoute exact path="/" component={HomePage} />
       <Route path="/login" component={Login}/>
      </Router>
      </div>
    );
  }
}

export default App;
