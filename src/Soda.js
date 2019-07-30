import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Soda.css'

export default  class Soda extends Component {
  render() {
    return (<div>
      <div className="Soda-info">
        <p>OMG SUGARRRR</p>
        <p><Link to="/">GO BACK</Link></p> 
      </div>
      <img className="Soda-left" src="http://pngimg.com/uploads/cocacola/cocacola_PNG17.png"></img>
      <img className="Soda-right" src="http://pngimg.com/uploads/cocacola/cocacola_PNG17.png"></img>
    </div>);
  }
}