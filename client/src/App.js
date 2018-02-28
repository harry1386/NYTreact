import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Articles from "./components/pages/Articles";
// import './App.css';

const App = () =>
  <Router>
      <Switch>
        <div>
            <Route exact path="/" component={Articles} />
        </div>
      </Switch>
  </Router>;
 
export default App;
