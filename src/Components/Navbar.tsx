import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
             <Link to="/" style={{ textDecoration: 'none',color:'white' }}>HashedIn</Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           
          </Typography>
          <Typography component="div" sx={{ flexGrow: .1 }}><Link to="/about-us" style={{ textDecoration: 'none',color:'white' }}>About Us</Link></Typography>
          <Typography><Link to="/contact-us" style={{ textDecoration: 'none',color:'white' }}>Contact Us</Link></Typography>
          <Typography  sx={{ flexGrow: .1 }}><Link to="/apiIntegration" style={{ textDecoration: 'none',color:'white' }}>Mock API</Link></Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
