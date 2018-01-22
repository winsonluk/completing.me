import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import logo from './logo.svg';
import './App.css';

const cities = [
  'san jose',
  'santiago',
  'san francisco',
  'santa rosa',
  'san juan',
  'sabadell',
  'salamanca',
  'salt lake city',
  'salinas',
  'salem',
  'sausalito',
  'taipei',
  'tel aviv',
  'tempe',
  'termez',
  'temuco',
  'tiajuna',
  'tieling',
  'thousand oaks',
  'thunder bay',
  'tokyo',
  'tulsa'
]

class App extends Component {
  handleChange(e, match) {
    cities.forEach((city) => {
      if (match.length >= 3 && city.startsWith(match.toLowerCase())) {
        document.getElementById(city).style.display="block";
      } else {
        document.getElementById(city).style.display="none";
      }
    });
  }
  render() {
    let items = [];
    cities.forEach((city) => {
      items.push (
        <List style={{padding: '0px'}}>
          <ListItem
            id={city}
            style={{display: 'none'}}
            primaryText={city.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})}
          />
        </List>
      );
    });
    const focusInput = input => {
      input.focus();
    };
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
          ref={focusInput}
          hintText="hint text"
          floatingLabelText="floating label text"
          onChange={this.handleChange}
        />
        {items}
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
