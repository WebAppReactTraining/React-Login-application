import React, { Component } from 'react';
import Login from './LoginPage';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import PrivateRoute from './PrivateRoute';
import HomePage from './Homepage';

class App extends Component {
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
