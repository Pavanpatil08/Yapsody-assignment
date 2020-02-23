import React from "react";
import ReactDOM from "react-dom";
import { Route, Redirect, Link } from "react-router-dom";
import Create from "./createTodo";
import Edit from "./editTodo";
import Home from "./Home";
import Navbar from "./Navbar";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/create" component={Create}></Route>
        <Route exact path="/edit/:id" component={Edit}></Route>
      </React.Fragment>
    );
  }
}
