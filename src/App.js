import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from './components/navigation/NavBar';
import { Contacts } from './components/navigation/Contacts';
import { About } from './components/navigation/About';
import { Qna } from './components/navigation/Qna';


import './App.css';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />

        <Switch>
          <Route path="/contacts" component={Contacts} />
          <Route path="/about" component={About} />
          <Route path="/qna" component={Qna} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
