# [completing.me](http://completing.me)

**Search for a city from a provided list with [React](https://facebook.github.io/react/).**

This project was bootstrapped with [Create React
App](https://github.com/facebookincubator/create-react-app) and uses
[Material-UI](https://material-ui.com) for a material design aesthetic. The application is hosted on
Github Pages with Amazon Web Service's Route 53 domain registration and DNS services.

Please install React if you do not yet have it installed.

`npm install react`

To run the application, simply execute `npm start`.

## Challenge

With a provided list (formatted as a JavaScript array), users should be able to search for a city on
the list, with results updated live as soon as a user types in three characters. Error messages should
be shown when fewer than three characters are entered or when no matches are found. My application is
formatted in three parts: a title bar, a search bar, and a dynamic list showing cities and error
messages. The search results are displayed by a handleChange() method, which sets style.display to
`block` or `none` depending on whether a city or error message should be displayed.

## Title Bar
The title bar was implemented with Material UI's AppBar. The default menu icon button was manually removed for simplicity.

## Search Bar

The search bar is a Material UI TextField. .focus() is called to load the search field automatically. Every time the text in the search bar changes, handleChange() is called to update the list and error messages.

## List and Error Messages

Both the list of cities and error messages reside within a Material UI List. Items on the list are hidden by default and revealed when handleChange() deems it appropriate to do so. Custom styling was required on the error messages to ensure that they contrast enough with actual results.
