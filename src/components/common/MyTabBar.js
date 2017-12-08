import React from 'react'
import {TabBar} from 'antd-mobile'
import '../../assets/styles/tabBar.less'

// 引入页面
import Notice from '../../containers/Notice/notice.js'
import Home from '../../containers/Home/home.js'
import User from '../../containers/User/user.js'

/*图片icon*/
import homeIcon from '../../assets/images/home.svg'
import homeIconSeleted from '../../assets/images/home-s.svg'
import noticeIcon from '../../assets/images/notice.svg'
import noticeIconSeleted from '../../assets/images/notice-s.svg'
import meIcon from '../../assets/images/me.svg'
import meIconSeleted from '../../assets/images/me-s.svg'


class  MyTabBar extends React.Component {
    constructor() {
      super()
      this.state={
        selectedTab:'home',
        showDot:true
      }
    }
    render(){
      return (
        <TabBar
          style={{ position: 'fixed',bottom:'0'}}
          className="tabBar"
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="#e9e9e9"
        >
          <TabBar.Item
            icon={{ uri:homeIcon }}
            selectedIcon={{ uri: homeIconSeleted }}
            title="报修广场"
            key="home"
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
               selectedTab: 'home',
             });
            }}
          >
          <Home/>
          
          </TabBar.Item>

          <TabBar.Item
            icon={{ uri:noticeIcon }}
            selectedIcon={{ uri: noticeIconSeleted }}
            title="公告"
            key="notice"
            dot = {this.state.showDot}
            selected={this.state.selectedTab === 'notice'}
            onPress={() => {
              this.setState({
               selectedTab: 'notice',
             });
            }}
          >
          <Notice/>
          </TabBar.Item>

          <TabBar.Item
          icon={{ uri:meIcon }}
          selectedIcon={{ uri: meIconSeleted }}
            title="个人中心"
            key="me"
            selected={this.state.selectedTab === 'me'}
            onPress={() => {
              this.setState({
               selectedTab: 'me',
             });
            }}
          >
          <User/>
          </TabBar.Item>
        </TabBar>
      );
    }
}

export default MyTabBar
