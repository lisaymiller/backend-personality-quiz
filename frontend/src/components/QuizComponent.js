import React, { Component } from "react";
import QuizService from "../services/QuizService";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
class QuizComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: [],
      dataArray: [],
    };
  }
  componentDidMount() {
    QuizService.getQuiz().then((response) => {
      this.setState({ quiz: response.data });
    });
  }
  handleChange = (event) => {
    let data = event.target.value.charAt(0);
    this.state.dataArray.push(data);
  };
  calculate = () => {
    let aScore = 0;
    let bScore = 0;
    let cScore = 0;
    let dScore = 0;
    let eScore = 0;
    for (let i = 0; i < this.state.dataArray.length; i++) {
      if (this.state.dataArray[i] === "A") {
        aScore++;
      }
      if (this.state.dataArray[i] === "B") {
        bScore++;
      }
      if (this.state.dataArray[i] === "C") {
        cScore++;
      }
      if (this.state.dataArray[i] === "D") {
        dScore++;
      }
      if (this.state.dataArray[i] === "E") {
        eScore++;
      }
    }

    // scoring
    let personality = ["Zach", "Lionel", "George", "Kaley", "Pasha"];
    let score = [aScore, bScore, cScore, dScore, eScore];
    function getSum(a) {
      var total = 0;
      for (var i in a) {
        total += a[i];
      }
      return total;
    }
    let index = 0; //index of highest score. e.g. 0=>A, 1=>B, 2=>C, 3=>D, 4=>E
    let highScore = score[0];
    let tieIndex = -1; //indicates if there is a tie. -1 => no tie, >-1 => tie
    for (let i = 1; i < score.length; i++) {
      if (highScore < score[i]) {
        index = i;
        highScore = score[i];
        tieIndex = -1;
      } else if (highScore === score[i]) {
        tieIndex = index;
        index = i;
        highScore = score[i];
      }
    }
    if (tieIndex > -1 && getSum(score) === 13) {
      alert(
        "You tied with " +
          personality[index] +
          " and " +
          personality[tieIndex] +
          ", please retake the quiz"
      );
      window.location.reload(true);
    } else if (getSum(score) < 13) {
      alert("Please complete the quiz");
    } else {
      document.location.href = personality[index];
    }
  };
  render() {
    return (
      <div>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          style={{ minHeight: "100vh" }}
        >
          <h1>Personality Quiz</h1>
          <div>
            {this.state.quiz.map((question) => (
              <div style={{ width: 420 }} key={question.id}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">
                    <Typography variant="h6" color="primary">
                      {question.question}
                    </Typography>
                  </FormLabel>
                  <RadioGroup
                    aria-label="answer"
                    name="answer"
                    onChange={this.handleChange}
                  >
                    <FormControlLabel
                      value={question.answer1}
                      control={<Radio />}
                      label={question.answer1}
                    />
                    <FormControlLabel
                      value={question.answer2}
                      control={<Radio />}
                      label={question.answer2}
                    />
                    <FormControlLabel
                      value={question.answer3}
                      control={<Radio />}
                      label={question.answer3}
                    />
                    <FormControlLabel
                      value={question.answer4}
                      control={<Radio />}
                      label={question.answer4}
                    />
                    <FormControlLabel
                      value={question.answer5}
                      control={<Radio />}
                      label={question.answer5}
                    />
                  </RadioGroup>
                </FormControl>
                <br />
                <br />
              </div>
            ))}
            <Button
              variant="contained"
              color="primary"
              onClick={this.calculate}
            >
              Submit
            </Button>
            <br />
            <br />
          </div>
        </Grid>
      </div>
    );
  }
}
export default QuizComponent;
