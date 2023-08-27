import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./Robo.css";
import Scroll from '../components/Scroll';
import ErrorBoundry from "../components/ErrorBoundry";

class RoboApp extends Component {
  constructor() {
    super() /* without super this is not gonna work */
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
      return response.json();
    })
    .then(users=>{
      this.setState({robots:users})
    })
    
  }


  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }
  render() {
    const {robots,searchfield}= this.state
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    /*If loading takes time*/ 
    if(!robots.length){
      return <h1>Loading..</h1>
    }else{
      return (
        <div className="tc ">
          <h1 className="f1">Robo Friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>   
          </Scroll>
          
        </div>
      );
    }
  }
}

export default RoboApp;
