import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteThings: []
    };
  }

  componentDidMount() {
    axios.get("/api/favorites").then(response => {
      this.setState({
        favoriteThings: response.data
      });
    });
  }

  handleClick(){
    axios.post(`/api/favorites/${this.refs.fav.value}`).then(response=>{
      this.setState({
        favoriteThings: response.data
      })
      
    })
  }



  render() {
    let favs = this.state.favoriteThings.map((e, i) => {
      return <li key={i}>{e}</li>;
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input ref="fav" type="text" placeholder="favorite item" />
        <button onClick={() => this.handleClick()}>Submit</button>
        <ul>{favs}</ul>
      </div>
    );
  }
}

export default App;
