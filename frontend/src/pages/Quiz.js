import React, { Component } from "react";
import AppNav from "../components/AppNav";
import QuizComponent from "../components/QuizComponent";

class Quiz extends Component {
  state = {};

  render() {
    return (
      <div>
        <AppNav />
        <QuizComponent />
      </div>
    );
  }
}

export default Quiz;
