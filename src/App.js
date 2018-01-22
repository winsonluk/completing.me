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

  // This function is called whenever the text input is changed.
  handleChange(e, match) {

    // numCities begins at cities.length and decrements for every city that doesn't match.
    // If numCities is 0, that means none of the cities match.
    var numCities = cities.length;

    // Show/hide cities and errors based on matches.
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

    // If no cities match (numCities === 0), show a error message.
    if (match.length >= 3 && numCities === 0) {
        document.getElementById("matchError").style.display="block";
    } else {
        document.getElementById("matchError").style.display="none";
    }
  }

  render() {

    // items[] contains the cities formatted as Material UI ListItems.
    let items = [];
    cities.forEach((city) => {
      items.push (
        <List style={{padding: '0px'}}>
          <ListItem
            id={city}
            style={{display: 'none'}} // We want to hide the cities until they match the input.
            // To preserve the format of cities[] while displaying properly capitalized results,
            //  we do some simple string manipulation to the cities.
            primaryText={city.replace(/\w\S*/g,
                                      function(txt){return txt.charAt(0).toUpperCase()
                                                    + txt.substr(1).toLowerCase();})}
          />
        </List>
      );
    });

    // Add the error messages as ListItems, but format them differently than cities for ease of
    // differentiation between cities and error messages.
    items.push (
      <List style={{padding: '0px'}}>
        <ListItem
          id="matchError"
          style={{display: 'none'}}
          secondaryText="Sorry, I couldn't find any matches for you. Perhaps try a different city?"
          secondaryTextLines="2"
          disabled={true}
        />
      </List>
    );
    items.push (
      <List style={{padding: '0px'}}>
        <ListItem
          id="minError"
          secondaryText="Please type at least 3 characters so that I can find your city."
          secondaryTextLines="2"
          disabled={true}
        />
      </List>
    );

    // Select the search field automatically when the page loads.
    const focusInput = input => {
      input.focus();
    };

    // The page is formatted in the following order: App Bar, Text Field, ListItems.
    return (
      <MuiThemeProvider>
      <div className="App">
        <AppBar
          title="completing.me"
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
