import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import {Card, CardHeader} from 'material-ui/Card';
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
		if (match.length >= 3) {
      cities.forEach((city) => {
        if (city.startsWith(match.toLowerCase())) {
          console.log(city);
        }
      });
    }
  }
  render() {
    let cards = [];
    cities.forEach((city) => {
      cards.push (
        <Card>
          <CardHeader
            title={city.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})}
          />
        </Card>
      );
    });
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
        {cards}
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
