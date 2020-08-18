import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppNav from "../components/AppNav";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNav />
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          style={{ minHeight: "100vh" }}
        >
          <h1>Welcome to WWC's personality quiz!</h1>
          <p>Find out which WIN mentor you most likely resemble</p>
          <Grid container direction="row" justify="center" alignItems="center">
            <Card style={{ margin: 10 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  width="100"
                  image={require("../images/pasha.png")}
                  title="Pasha"
                ></CardMedia>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    <center>
                      <b>Pasha</b>
                    </center>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card style={{ margin: 10 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  width="100"
                  image={require("../images/zach.png")}
                  title="Zach"
                ></CardMedia>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    <center>
                      <b>Zach</b>
                    </center>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card style={{ margin: 10 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  width="100"
                  image={require("../images/lionel.png")}
                  title="Lionel"
                ></CardMedia>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    <center>
                      <b>Lionel</b>
                    </center>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Card style={{ margin: 10 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    width="100"
                    image={require("../images/george.png")}
                    title="George"
                  ></CardMedia>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      <center>
                        <b>George</b>
                      </center>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card style={{ margin: 10 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    width="100"
                    image={require("../images/kaley.png")}
                    title="Kaley"
                  ></CardMedia>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      <center>
                        <b>Kaley</b>
                      </center>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
          <br />
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/quiz"
          >
            Take Quiz
          </Button>
          <br />
        </Grid>
      </div>
    );
  }
}
export default Home;
