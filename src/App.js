import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor() {
    super()

    this.state = {
      userInput: '',
      passInput: ''
    }
    this.submitClick = this.submitClick.bind(this)
  }

  submitClick() {
    axios.post('/api/register', {username: this.state.userInput, password: this.state.passInput}).then(res => {
      console.log(res.data)
    })
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br/>
        <input placeholder='username' onChange={e => this.setState({userInput: e.target.value})}/>
        <br/><br/>
        <input placeholder='password' onChange={e => this.setState({passInput: e.target.value})}/>
        <br/>
        <button onClick={this.submitClick}>Register</button>
      </div>
    );
  }
}

export default App;
