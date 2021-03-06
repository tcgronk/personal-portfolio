import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Lead from "../Lead/Lead";
import "./App.css";
import Articles from "../Lead/Articles";
import CodingJourney from "../CodingJourney/CodingJourney";

export default class App extends Component {
  renderNavRoutes() {
    return (
      <span>
        <Route path="/" component={() => <Nav />} />
      </span>
    );
  }
  renderMainPage() {
    return (
      <span>
        {["/", "/home"].map((path) => (
          <Route exact path={path} key={path} component={() => <Home />} />
        ))}

        <Route exact path="/about" component={() => <CodingJourney />} />
        <Route exact path="/leadership" component={() => <Lead />} />

        {["/leadership/:article"].map((path) => (
          <Route exact path={path} key={path} component={Articles} />
        ))}
      </span>
    );
  }

  render() {
    const queryString = require("query-string");
    const params = queryString.parse(document.location.search);
    const redirect = params.redirect; 
    if (document.location.pathname === "/" && redirect) {
      document.location.assign(`${document.location.origin}/${redirect}`);
    }
    return (
      <div className="App">
        <header className="App-header">
          <nav>{this.renderNavRoutes()}</nav>
        </header>

        <div className="body" id="page-wrap">
          <main>{this.renderMainPage()}</main>
        </div>
        <Footer />
      </div>
    );
  }
}
