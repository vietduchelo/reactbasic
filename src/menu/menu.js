import React, { Component } from 'react';
import logo from './../img/logo.svg'
import '../menu/menu.css';

class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse menu">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#"><img id="img" src={logo} className="App-logo" alt="logo" /></a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active"><a href="#">Home</a></li>
          <li><a href="#">Page 1</a></li>
          <li><a href="#">Page 2</a></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
          <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
      </div>
    </nav>    
    );
  }
}

export default Menu;
