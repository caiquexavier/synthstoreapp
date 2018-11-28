import React, { Component } from 'react';
import 'typeface-roboto';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TopBar from './components/topbar'
import Product from './components/product'

const theme = createMuiTheme({
  palette: {
    primary: { main: '#27c26f' }, // Purple and green play nicely together.
    secondary: { main: '#FFFFFF' }, // This is just green.A700 as hex.
  },
  typography: {
   useNextVariants: true,
 },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <TopBar/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Product/>
      </MuiThemeProvider>
    );
  }
}

export default App;
