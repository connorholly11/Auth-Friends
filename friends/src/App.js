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
      
        <Link to='/login'> Login </Link>
        <Link to='/protected'> Private </Link>

        <Switch>
          <PrivateRoute exact path='/protected' component={Friends} />
          <Route path='/login' component={LoginForm} />
          <Route component={LoginForm} />
        </Switch>
    </div>
  </Router>
  );
}

export default App;
