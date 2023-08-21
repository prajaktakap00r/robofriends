import React, { Component } from "react";
import { robots } from "./robots";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./Robo.css";

class RoboApp extends Component {
  constructor() {
    super() /* without super this is not gonna work */
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }
  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
      <div className="tc ">
        <h1 className="f1">Robo Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default RoboApp;
