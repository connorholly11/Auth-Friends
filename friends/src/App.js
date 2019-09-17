import React from 'react';
import './App.css';
import LoginForm from './components/loginform'
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Friends from './components/Friends';


function App() {
  return (
  <Router>
    <div className="App">
      
        <NavLink to='/login'> Login </NavLink>
        <NavLink to='/protected'> Private </NavLink>

        <Route path='/login' component={LoginForm} />
        <PrivateRoute path='/protected' component={Friends} />
      
    </div>
  </Router>
  );
}

export default App;
