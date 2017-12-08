import React from 'react'


export default class Item extends React.Component {
  constructor(props) {
    super(props)
    this.setState({
      item:props.item
    })
  }
  render(){
    return(
      <div>
      <div>
        <img src={this.state.img}/>
      </div>
      <div>
        <div><span>{this.state.title}</span><span>{this.state.price}</span></div>
        <p>{this.state.title}</p>
        <div><span>{this.state.id}</span><span>{this.state.count}</span><span>{this.state.title}</span></div>
      </div>
      </div>
    )
  }
}
