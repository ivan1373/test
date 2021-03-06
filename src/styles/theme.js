// MUI
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#21717b"
    },
    secondary: {
      main: "#dbb33f"
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
