import React from "react";
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import UserInfo from "../components/UserInfo";
import "./Display.css";
import Weather from '../components/Weather';
import Mountain from '../components/Mountain';
import Note  from "../components/Note";
import Timer from "../components/Timer";




function Display() {
  const [note,setNote] = useState(null);
  const navigate = useNavigate();
  const browseHandler = ()=>{
    if(note !== null){
      localStorage.setItem("Note",note);
    } 
    navigate('/browser');
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
          <Timer/>
        </div>
       <button className="browseBtn" onClick={browseHandler}>
        Browse
       </button>
    </div>
  );
}

export default Display;
