import React from 'react'
import MyTabBar from '../common/MyTabBar.js'
import '../../assets/styles/frame.css'
export default class Frame extends React.Component {
  render(){
    return(
      <div className="tab-bar-box">
        <MyTabBar/>
      </div>
    )
  }
}
