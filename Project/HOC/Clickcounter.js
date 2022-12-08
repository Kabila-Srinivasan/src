import React, { Component } from 'react'
import EnComponent from './HOC'

class Clickcounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {count:0}
    }
  render() {
    return (
      <div>
      <button onClick={this.inc}> Click{this.state.count}</button></div>
    )
  }
  inc=()=>{
    this.setState({count:this.state.count+1})
}
}
export default EnComponent(Clickcounter)


