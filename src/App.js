import React from "react";
import { reducer } from "./utils/reducers";
import { createStore, applyMiddleware } from "redux";

import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import SignUpForm from "./Components/SignUpForm";
import SignInForm from "./Components/SignInForm";

import MainPage from "./Components/MainPage";
import Header from "./Components/Header";

import AddSleepEntry from "./Components/AddSleepEntry.js";
import EditSleepEntry from "./Components/EditSleepEntry.js"
import {AppStyles} from "./AppStyles";
import "./App.css";

function App() {

  return (
    <Router>
      <AppStyles>
        <Header />
        <PrivateRoute exact path="/main-page" component={MainPage} />
        <PrivateRoute  path="/add-sleep-entry" component={AddSleepEntry} />
        
        <PrivateRoute  path="/edit-sleep-entry/:id">
          <EditSleepEntry />
        </PrivateRoute>

        <Route exact path="/sign-in" component={SignInForm} />
        <Route exact path="/" component={SignUpForm} />
        
      </AppStyles>
    </Router>
     
  );
} 




export default App;
