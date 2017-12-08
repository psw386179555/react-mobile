import React from 'react'


export default class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item:props.item
    }
  }
  render(){
    return(
      <div>
        <div>
          <img src={this.state.item.img} alt={this.state.item.title}/>
        </div>
        <div>
          <div><span>{this.state.item.title}</span><span>{this.state.item.price}</span></div>
          <p>{this.state.item.title}</p>
          <div><span>{this.state.item.id}</span><span>{this.state.item.count}</span><span>{this.state.item.title}</span></div>
        </div>
      </div>
    )
  }
}
