import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Start extends Component {
  render() {
    return (
      <section className="Start">
          Hello! My name is Tess & I'm a web developer in the Bay Area. 
          <Route to={Code}></Route>
      </section>
    );
  }
}
