import * as React from "react";

import Logo from "../assets/image/logo.png";
import VBLogo from "../assets/image/VBlogo.png"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Button from '@mui/material/Button';


const theme = createTheme({
    palette: {
      success: {
        main: '#000',
      },
    },
  });

export default function Header() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "white"}} sx={{boxShadow:2 ,height: "60px"}}>
        <Toolbar>
        <img src={Logo.src} alt="ssww"style={{height: "4vmin"}}/>
          <Typography href="/" variant="h5" component="a" sx={{ cursor: "pointer", marginLeft: 1,color: "black", marginRight: 1 }}>
            Company Management
          </Typography>
          <Typography
            variant="h7"
            component="a"
            href="/"
            sx={{ flexGrow: 1, color: "black",cursor: "pointer",marginBottom: -0.15 }}
          >
            Developed by Varobol Co,Ltd <img alt="eee"src={VBLogo.src} style={{height: "2.5vmin", marginBottom:"-0.5vmin"}}/>
          </Typography>
          <ThemeProvider theme={theme}>
            <Button variant="text" size="large" startIcon={<AccountCircle />} color="success">Login</Button>
            </ThemeProvider>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
