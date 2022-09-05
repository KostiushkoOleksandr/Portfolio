import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import './App.css';
import 'typeface-roboto';
import Routes from './components/Routes'
import Reboot from 'material-ui/Reboot';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#6a90cf',
      main: '#37639e',
      dark: '#00396f',
    }
  },
  typography: {
    fontFamily:
    'Roboto,sans-serif',
  }
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <Reboot/>
          <Routes/>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
