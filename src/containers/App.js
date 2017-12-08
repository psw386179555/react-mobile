/*
* @Author: Administrator
* @Date:   2017-12-08 11:23:08
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-08 11:55:02
*/
import React, { Component } from 'react';
import '../assets/styles/main.css'
class App extends Component {
  render() {
    return (
      <div className="app-box">
         {this.props.children}
      </div>
    )
  }
}

export default App;
