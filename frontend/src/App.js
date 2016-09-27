import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends Component{
  render(){
    return (

      <h1>Protoze ...{this.props.title} + {this.props.code2}</h1>
    );
  }
}

class App extends Component {
  render() {
    const code1 = 'code123';
    const array1 = [
      ["1","jedna"],["2","dva"]
    ];

    return (
      <div className="App">
      {array1.map(([code1,title])=>
        <Header code={code1} title={title}/>
      )}
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );

  }
}

export default App;
