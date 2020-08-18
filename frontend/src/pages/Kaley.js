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

class Kaley extends Component {
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
                image={require("../images/kaley.png")}
                title="kaley"
              ></CardMedia>
              <CardContent>
                <Typography variant="h5" component="h2">
                  You got Kaley!
                </Typography>
                <Typography>
                  While Kaley may be the most helpful
                  <br />
                  in a tough situation, you might
                  <br />
                  catch her looking at cute animal pictures at work...
                  <br />
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
export default withStyles(useStyles)(Kaley);
