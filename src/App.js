import React, { Component } from 'react';
import VendingMachine from './VendingMachine'
import Chips from './Chips'
import Soda from './Soda'
import Sardine from './Sardine'
import { BrowserRouter, Route } from "react-router-dom";
import './App.css'
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/chips" render={() => <Chips />} />
          <Route exact path="/soda" render={() => <Soda />} />
          <Route exact path="/sardine" render={() => <Sardine />} />
          <Route exact path="/" render={() => <VendingMachine />} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
