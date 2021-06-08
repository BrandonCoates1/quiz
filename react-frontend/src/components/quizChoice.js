import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { decode } from "html-entities";

const QuizChoice = ({ setQuiz, quiz }) => {
  const [allQuizData, setAllQuizData] = useState(["option 1", "option 2", "option 3", "option 4", "option 5", "option 6", "option 7", "option 8"]);
  const [redirect, setRedirect] = useState(false);

  const handleButton = (e) => {
    setQuiz("hello");
    setRedirect(true);
  }

  const eachQuiz = () => {
    return (
      allQuizData.map((item, index) => {
        return (
          <button className="card" onClick={handleButton}>
            <div className="card-content" id={`quiz-card${index + 1}`}>
              <h2>{item}</h2>
              <p>this is a quiz topic</p>
              <p>hello again this is a placeholder</p>
            </div>
          </button>
        );
      })
    );
  }

  // console.log(decode("FLAC stands for &quot;Free Lossless Audio Condenser&quot;"));

  if (redirect) {
    return (
      <Redirect to="/quiz/play" />
    )
  }

  return (
    <>
      <h1 className="quizTitle">Select a quiz</h1>
      <div className="quiz">
        {eachQuiz()}
      </div>
    </>
  )
}

export default QuizChoice;