import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './VendingMachine.css'

export default  class VendingMachine extends Component {
  constructor(props) {
		super(props);
		this.state = { }

        };
        
  render(){
    return(
      <div className="Vend">
        <div className="Vend-infos">
          <p> Hello I am a vending Machine</p>
          <p> What would you like to eat?</p>
        </div>

        <div className="Vend-products">
          <p><Link to="/soda">Soda</Link></p>
          <p><Link to="/chips">Chips</Link></p> 
          <p><Link to="/sardine">Fresh Sardines</Link></p> 
        </div>
    </div>
    )
  }

    }