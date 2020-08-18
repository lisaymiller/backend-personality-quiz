import axios from "axios";

const QUIZ_REST_API_URL =
  "https://personality-quiz-wwc.herokuapp.com/quiz/questions";

class QuizService {
  getQuiz() {
    return axios.get(QUIZ_REST_API_URL);
  }
}

export default new QuizService();
