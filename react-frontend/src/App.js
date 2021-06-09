import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login";
import Register from "./components/register";
import Information from "./components/information";
import QuizChoice from "./components/quizChoice";
import Score from "./components/quizScore";
import Quiz from "./components/quiz";
import Account from "./components/account";
import './App.css';

const App = () => {
  const [user, setUser] = useState("");
  const [quiz, setQuiz] = useState("");
  const [answersGiven, setAnswersGiven] = useState([]);


  return (
    <div className="main">
      <Router>
        <div className="navbar">
          <ul>
            <li>
              <Link to="/" className="navbar-item">Home</Link>
            </li>
            {user ?
              <>
                <li>
                  <Link to="/quiz" className="navbar-item">Quiz</Link>
                </li>
                <li>
                  <Link to="/account" className="navbar-item">Account</Link>
                </li> 
              </> :
              <>
                <li>
                  <Link to="/login" className="navbar-item">Login</Link>
                </li>
                <li>
                  <Link to="/register" className="navbar-item">Register</Link>
                </li>
              </>}
          </ul>
        </div>

        <Switch>
          <Route path="/quiz/play">
            <Quiz quiz={quiz} answersGiven={answersGiven} setAnswersGiven={setAnswersGiven}/>
          </Route>
          <Route path="/quiz/score">
            <Score quiz={quiz} answersGiven={answersGiven} setAnswersGiven={setAnswersGiven}/>
          </Route>
          <Route path="/quiz">
            <QuizChoice setQuiz={setQuiz} quiz={quiz}/>
          </Route>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/account">
            <Account user={user} setUser={setUser} />
          </Route>
          <Route path="/">
            <Information user={user}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
