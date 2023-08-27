import React, { useState,useEffect} from "react";   /* UseState and UseEffect are hooks --> now will remove component from here*/
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./Robo.css";
import Scroll from '../components/Scroll';

function RoboAppHooks (){
  const [robots,setRobots]= useState([])
  const [searchfield,SetSearchfield]= useState('')
  const [count,setCount]= useState(0)

  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
      return response.json();
    })
    .then(users=>{
      setRobots(users)
    })
  
    console.log(count)
  },[count])  /* By addig count here the no increments */

  const onSearchChange = (event) => {
    SetSearchfield( event.target.value )
  }
  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase())
  })
    /*If loading takes time*/ 
  return !robots.length? 
    <h1>Loading..</h1>:
    (
      <div className="tc ">
        <h1 className="f1">Robo Friends</h1>
        <button onClick={()=>setCount(count+1)}>Click Me!</button>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>      
           <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );  
}
export default RoboAppHooks;