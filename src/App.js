import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  handleChange(e, city) {
    console.log(city)
  }
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TextField
          hintText="hint text"
          floatingLabelText="floating label text"
          onChange={this.handleChange}
        />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
