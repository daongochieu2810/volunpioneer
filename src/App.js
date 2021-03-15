import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/navigation/NavBar';
import HomePage from './components/homepage/HomePage';
import PreQuiz from './components/quizpage/PreQuiz';
import Volunteer from './components/Volunteer/Volunteer';
import Organisation from './components/Organiser/Organiser';

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
            <Route exact path="/organisation" component={Organisation} />
            <Route exact path="/volunteer" component={Volunteer} />
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
