import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import { IconButton } from "@material-ui/core";

class AppNav extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" component={Link} to="/">
              <HomeRoundedIcon />
            </IconButton>

            <Typography edge="start" variant="h6" style={{ flexGrow: 1 }}>
              WIN 2020 Personality Quiz
            </Typography>
            <Button
              color="inherit"
              varient="outlined"
              component={Link}
              to="/quiz"
            >
              Take Quiz
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default AppNav;
