// https://mui.com/material-ui/customization/theming/

import { createTheme } from "@mui/material";
import { rem } from "../utils/pxToRem";

export default createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#00ADB5",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          cursor: "pointer !important",
          borderRadius: "8px !important",
          border: "none",
          textTransform: "none",
          boxShadow: "none !important",
          fontSize: `${rem(18)} !important`,
          lineHeight: `${rem(27)} !important`,
          fontWeight: "500 !important",
          padding: `${rem(10)} ${rem(24)}`,
          transition: "all 0.5s ease-in-out",
          height: `${rem(47)}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "@media (max-width: 768px)": {
            height: `${rem(40)}`,
            lineHeight: `${rem(16)} !important`,
          },
          "&:hover": {
            border: "none",
            boxShadow: "none !important",
          },
          svg: {
            maxWidth: "20px",
            minWidth: "20px",
            maxHeight: "20px",
            minHeight: "20px",
            marginRight: 0,
          },
        },
        outlined: {
          color: "#00ADB5",
          border: "1px solid #00ADB5",
          "&:hover": {
            color: "#00ADB5",
            border: "1px solid #00ADB5",
          },
        },
        contained: {
          color: "#fff",
          background: "#00ADB5",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: rem(24),
          paddingRight: rem(24),
          "@media (min-width:1440px)": {
            maxWidth: "1500px",
            width: "100%",
          },
          "@media (max-width:768px)": {
            paddingLeft: rem(24),
            paddingRight: rem(24),
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          maxWidth: "none",
        },
      },
    },
  },
  typography: {
    fontFamily: "Poppins",
    h1: {
      fontSize: rem(50),
      fontWeight: 500,
      lineHeight: rem(75),
      color: "#222831",
      "@media (max-width: 768px)": {
        fontSize: rem(50),
        fontWeight: 500,
        lineHeight: rem(75),
      },
    },
    h2: {
      fontSize: rem(36),
      fontWeight: 600,
      lineHeight: rem(54),
      color: "#222831",
      "@media (max-width: 768px)": {
        fontSize: rem(36),
        fontWeight: 600,
        lineHeight: rem(54),
      },
    },
    h3: {
      fontSize: rem(28),
      fontWeight: 600,
      lineHeight: rem(42),
      color: "#222831",
      "@media (max-width: 768px)": {
        fontSize: rem(36),
        fontWeight: 600,
        lineHeight: rem(54),
      },
    },
  },
});
