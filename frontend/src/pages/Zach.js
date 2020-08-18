import React, { Component } from "react";
import AppNav from "../components/AppNav";
import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const useStyles = () => ({
  root: {
    width: 500,
  },
  media: {
    height: 400,
  },
});

class Zach extends Component {
  state = {};
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppNav />
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "90vh" }}
        >
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                component="img"
                height="450"
                image={require("../images/zach.png")}
                title="Zach"
              ></CardMedia>
              <CardContent>
                <Typography variant="h5" component="h2">
                  You got Zach!
                </Typography>
                <Typography>
                  Zach would be more likely to enjoy
                  <br />
                  a long walk at Hogwarts
                  <br />
                  than at the beach. But doesn't like costumes...
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button component={Link} to="/quiz" color="primary">
                Retake
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </div>
    );
  }
}
export default withStyles(useStyles)(Zach);
