import React from "react";
import "./App.css";
import Header from "./components/nav/Header";
import Navbar from "./components/nav/Navbar";
import Index from "./components/index/Index";
import Input from "./components/input/Input";
import Feedback from "./components/feedback/Feedback";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Input} />
          <Route path="/input" exact component={Index} />
          <Route path="/feedback" exact component={Feedback} />
        </Switch>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
