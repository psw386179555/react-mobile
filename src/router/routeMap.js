/*
* @Author: Administrator
* @Date:   2017-12-08 11:38:51
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-08 12:00:30
*/
import React from 'react'
import { BrowserRouter, Route ,Switch} from 'react-router-dom'
import Index from '../containers/Index/index.js'
import App from '../containers/App.js'
import Frame from '../components/frame/frame.js'

export default  class RouteMap extends React.Component{
	render() {
		return (
			<BrowserRouter>
				<App>
					<Switch>
						<Frame>
							<Route exact path="/" component={Index}/>
						</Frame>
					</Switch>
				</App>
			</BrowserRouter>
		);
	}
}
