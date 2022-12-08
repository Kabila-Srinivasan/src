import React, { Component } from 'react'

export default class ListEx extends Component {
  render() {
    
        const cars=["BMW ","800 ","Breeze ","Leo"]
    const listCars=cars.map((i)=> i);
    console.log(listCars);
        return (
      <h1>{listCars}</h1>
    )
  }
}


