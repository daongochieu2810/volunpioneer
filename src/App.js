
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/navigation/NavBar';
import HomePage from './components/homepage/HomePage';
import PreQuiz from './components/quizpage/PreQuiz';

import './App.css';

function App() {
  return (
    <div>
      <React.Fragment>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/prequiz" component={PreQuiz} />
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
