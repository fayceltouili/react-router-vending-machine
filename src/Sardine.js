import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Sardine.css"


export default  class Sardine extends Component {
  render() {
  	return (
			<div className="Sardine">
		<div className="Sardine-info">
			<p>YOU DON'T EAT THE SARDINES. THE SARDINES, THEY EAT YOU</p>
			<p><Link to="/">GO BACK</Link></p> 
		</div>
		</div>
		)
		
  }
}