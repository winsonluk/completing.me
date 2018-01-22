import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
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
    var numCities = cities.length;
    cities.forEach((city) => {
      if (match.length >= 3 && city.startsWith(match.toLowerCase())) {
        document.getElementById(city).style.display="block";
        document.getElementById("minError").style.display="none";
      } else if (match.length >= 3) {
        numCities -= 1;
        document.getElementById(city).style.display="none";
        document.getElementById("minError").style.display="none";
      } else {
        document.getElementById(city).style.display="none";
        document.getElementById("minError").style.display="block";
      }
    });
    if (match.length >= 3 && numCities === 0) {
        document.getElementById("matchError").style.display="block";
    } else {
        document.getElementById("matchError").style.display="none";
    }
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
    items.push (
      <List style={{padding: '0px'}}>
        <ListItem
          id="matchError"
          style={{display: 'none'}}
          secondaryText="Sorry, I couldn't find any matches for you. Perhaps try a different city?"
          disabled={true}
        />
      </List>
    );
    items.push (
      <List style={{padding: '0px'}}>
        <ListItem
          id="minError"
          secondaryText="Please type at least 3 characters so that I can find your city."
          disabled={true}
        />
      </List>
    );
    const focusInput = input => {
      input.focus();
    };
    return (
      <MuiThemeProvider>
      <div className="App">
        <AppBar
          title="React Autocomplete"
          showMenuIconButton={false}
        />
        <TextField
          ref={focusInput}
          floatingLabelText="Search for a city with me!"
          hintText="City"
          onChange={this.handleChange.bind(this)}
        />
        {items}
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
