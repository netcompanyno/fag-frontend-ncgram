import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import EksempelModule from "./module/eksempel-module";
import Feed from "./module/components/Feed";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {/*<EksempelModule></EksempelModule>*/}
        <Feed title={"test"} description={"test desc"} clickEvent = {function(){alert("clicked")}}>

        </Feed>
      </div>
    );
  }
}

export default App;
