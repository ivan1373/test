// MUI
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#283f97"
    },
    secondary: {
      main: "#ec1b78"
    }
  },
  shape: {
    borderRadius: 10
  },
  typography: {
    fontFamily: ["Rubik", "Roboto"].join(",")
  },
  overrides: {
    MuiButton: {
      label: {
        paddingTop: "2px",
        alignItems: "normal"
      }
    }
  }
});

export default theme;
