import { createMuiTheme } from "@material-ui/core/styles";

const themeData = {
  palette: {
    type: "light",
    primary: {
      main: "#ff7500",
    },
    secondary: {
      main: "#00BAFF",
    },
    background: {
      default: "#F4EBE2",
    },
    paper: {
      default: "#FFF",
    },
    text: {
      primary: "#161B23",
      secondary: "#706F6E",
    },
    error: {
      main: "#E40173",
    },
    warning: {
      main: "#EEEE2C",
    },
    success: {
      main: "#00CC67",
    },
    info: {
      main: "#9D04E1",
    },
  },
  typography: {
    fontFamily: "Nunito",
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
