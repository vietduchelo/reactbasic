import React, { Component } from 'react';
import './App.css';
import Menu from './menu/menu.js'
import Content from  '../../component/src/content/content.js'
class App extends Component {
  render() {
    return (
     <div className="all">
       <div className="menu">
       <Menu></Menu>
       </div>
       <div className="content">
       <Content></Content>
       </div>
      </div>
    );
  }
}

export default App;
