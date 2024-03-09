import React from "react";
import { useState } from 'react'
import { Link } from "react-router-dom";
import UserInfo from "../components/UserInfo";
import "./Display.css";
import Weather from '../components/Weather';
import Mountain from '../components/Mountain';
import Note  from "../components/Note";
import UrgeWithPleasureComponent from "../components/CountdownCircleTimer"



function Display() {
  const [note,setNote] = useState(null);
  const browseHandler = ()=>{
    if(note !== null){
      localStorage.setItem("Note",note);
    } 
  }
  
  return (
    <div className="display">
        <div className="header">
          <UserInfo />
        </div>
        <div className="note">
          <Note note={note} setNote={setNote}/>
        </div>
        <div className="mountain">
          <Mountain/>
        </div>
        <div className="footer">
          <Weather/>
        </div>
        <div className="stopwatch">
          <UrgeWithPleasureComponent/>
        </div>
      
       <button className="browseBtn" onClick={browseHandler}>
        Browse
       </button>
    </div>
  );
}

export default Display;
