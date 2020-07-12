import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../header/HeaderNav";
import WillWatchPage from "../pages/WillWatchPage";
import HomePage from "../pages/HomePage";


const AppPages = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Route exact path="/" component={HomePage} />
        <Route path="/WillWatchPage" component={WillWatchPage} />
      </Router>
    </div>
  );
};

export default AppPages;