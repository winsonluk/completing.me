# [completing.me](http://completing.me)

**Search for a city from a provided list with [React](https://facebook.github.io/react/).**

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and uses [Material-UI](https://material-ui.com) for a material design aesthetic. The application is hosted on Amazon Web Service's Simple Storage Service (S3) with Route 53 domain registration and DNS services.

## Title Bar
The title bar was implemented with Material UI's AppBar. The default menu icon button was manually removed for simplicity.

## Search Bar

The search bar is a Material UI TextField. .focus() is called to load the search field automatically. Every time the text in the search bar changes, handleChange() is called to update the list and error messages.

## List and Error Messages

Both the list of cities and error messages reside within a Material UI List. Items on the list are hidden by default and revealed when handleChange() deems it appropriate to do so. Custom styling was required on the error messages to ensure that they contrast enough with actual results.
