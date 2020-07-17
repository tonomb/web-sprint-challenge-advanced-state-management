import React, { Component } from "react";
import "./App.css";

//components 
import AddSmurf from '../components/AddSmurf'
import SmurfsList from '../components/SmurfsList'


class App extends Component {
  render() {
    return (
      <div className="App">
        <AddSmurf />
        <SmurfsList />
      </div>
    );
  }
}

export default App;
