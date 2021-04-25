import { createMuiTheme } from '@material-ui/core/styles';

const themeData = {
  palette: {
    type: 'light',
    primary: {
      main: '#ff7500',
    },
    secondary: {
      main: '#00BAFF',
    },
    background: {
      default: '#FFF8F2',
    },
    paper: {

    },
    text: {
      primary: '#9D4800',
      secondary: '#007099',
    },
    error: {
      main: '#E40173',
    },
    warning: {
      main: '#EEEE2C',
    },
    success: {
      main: '#00CC67',
    },
    info: {
      main: '#9D04E1',
    },
  },
  typography: {
    fontFamily: "Lato",
    h1: {
      fontFamily: "Nunito",
      fontWeight: 800,
      fontSize: 35,
      letterSpacing: "-0.24px",
    },
    h2: {
      fontFamily: "Nunito",
      fontWeight: 800,
      fontSize: 29,
      letterSpacing: "-0.24px",
    },
    h3: {
      fontFamily: "Nunito",
      fontWeight: 800,
      fontSize: 24,
      letterSpacing: "-0.06px",
    },
    h4: {
      fontFamily: "Nunito",
      fontWeight: 800,
      fontSize: 20,
      letterSpacing: "-0.06px",
    },
    h5: {
      fontFamily: "Nunito",
      fontWeight: 800,
      fontSize: 18,
      letterSpacing: "-0.05px",
    },
    h6: {
      fontFamily: "Nunito",
      fontWeight: 800,
      fontSize: 16,
      letterSpacing: "-0.05px",
    },
  },
};

export default createMuiTheme(themeData);