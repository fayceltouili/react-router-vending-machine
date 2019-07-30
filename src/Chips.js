import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Chips.css';
const CHIP_IMAGE = "https://www.pngkey.com/png/full/80-802382_bag-of-chips-png-lays-potato-chips.png"



export default  class Chips extends Component {
	constructor(props) {
		super(props);
		this.state = {  bags: []}
		this.addBags = this.addBags.bind(this);

	};
addBags(evt){
	evt.preventDefault();
	this.setState(function(){
		let bagStyle = {
			position: "absolute",
			width: "100px",
			top: `${Math.floor(Math.random()*500)}px`,
			left: `${Math.floor(Math.random()*1200)}px`
		}
		let newBag = { style: bagStyle }
		let newBags = [...this.state.bags, newBag];
		return {bags: newBags};
	})
}
	render(){
		return(
			<div>
				<div className="Chips-info">
				<p> BAGS BEATEN: {this.state.bags.length}</p>
				<button onClick={ this.addBags}>NOM NOM NOM</button>
				<p><Link to="/">GO BACK</Link></p>
				</div>
				{this.state.bags.map(bag => <img style={ bag.style } src={CHIP_IMAGE} alt="chips"/>)}

			</div>
		)
	}
	
}