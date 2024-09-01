import React, {Component} from "react";
import RoomPage from "./roomjoin";
import CreateRoomJoin from "./createroom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link,
  } from "react-router-dom";
  export default class HomePage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <Router>
             <Routes>
                 <Route  path="/" element={<p>This is the homepage</p>}></Route>
                 <Route path="/join" element={<RoomPage/>}/>
                 <Route path="/create" element={<CreateRoomJoin/>}/>
             </Routes>
         </Router> 
        )
    }
}
