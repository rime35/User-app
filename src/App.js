import React,{Component} from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Users from './component/Users';
import AddUser from './forms/AddUser';
import {BrowserRouter as Router,Route,} from "react-router-dom";
import NotFound from './NotFound';

class App extends Component {
  
  render() {
    return (
      <Router>
      <div className="container">
         <Navbar title="USER APP" />
            <hr/>
            <Route exact path = "/" component = {Users} />
            <Route exact path = "/add" component = {AddUser} />
            <Route component={NotFound}/>
            
      </div>
      </Router>
    );
  }
}
export default App;
