import React from 'react';
import './App.css';
import LoginForm from './components/loginform'
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';


function App() {
  return (
  <Router>
    <div className="App">
      
        <NavLink to='/login'> Login </NavLink>

        <Route path='/login' component={LoginForm} />
      
    </div>
  </Router>
  );
}

export default App;
