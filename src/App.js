import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// components
import { Screen } from './components/Screen.jsx';
import { Form } from './components/Form.jsx';
import { Content } from './components/Content.jsx';
import { Index } from './components/Index.jsx';
import { Setting } from './components/Setting.jsx';


const info = localStorage.getItem("info");

function App() {
  return (
    <Router>
      <Switch>
        // root
        <Route
          exact
          path="/"
          render={() => (
              info ? (
                <Screen
                className="responsive"
                />
              ) : (
                  <Setting to="/setting"/>
              )
          )}
        />
        // form
        <Route
          exact
          path="/setting">
          <Setting
          className="responsive"
          />
        </Route>
        // root
        <Route
          exact
          path="/content">
          <Content
          className="responsive"
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;