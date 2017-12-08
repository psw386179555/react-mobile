
import React from 'react'
import { ListView } from 'antd-mobile';
import { getFixedData }  from '../../fetch/home/home.js'
import Item from './item.js'


export default class Home extends React.Component{
	constructor(props) {
    super(props);
		const ds = new ListView.DataSource({
		 	rowHasChanged: (row1, row2) => row1 !== row2
	 	});
	 	this.state = {
		 	ds
	 };
	}
	componentDidMount(){
	 	let result = getFixedData();
	 	result.then(res=>{
	 		 return res.json();
	 	 }).then(json=>{
			 this.predata = this.state.ds.cloneWithRows(json)
	 		 this.setState({
	 			 ds:this.predata
	 		 })
	 	 })
	}
	_renderRow(row){
		return(
			<div>
				<Item item={row}/>
				</div>
		)
	}

	_loadMore=(e)=>{
		console.log(e)
	}
	render() {
		return (
			<div >
			<ListView
				ref={el => this.lv = el}
			 renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
				 {true? 'Loading...' : 'Loaded'}
			 </div>)}
				dataSource={this.state.ds}
				renderRow={row=>this._renderRow(row)}
				onEndReached={this._loadMore}
				className="am-list"
        pageSize={4}
        renderBodyComponent={() => <Home />}
			 	onEndReachedThreshold={200}
				onScroll={() => { console.log('scroll'); }}
        scrollRenderAheadDistance={500}
			/>
			</div>
		);
	}
}
