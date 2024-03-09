import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MovieBox from "../components/MovieBox";
import Action from "../images/Action.png";
import Drama from "../images/Drama.png";
import Fantasy from "../images/Fantasy.png";
import Fiction from "../images/Fiction.png";
import Horror from "../images/Horror.png";
import Music from "../images/Music.png";
import Romance from "../images/Romance.png";
import Thriller from "../images/Thriller.png";
import Western from "../images/Western.png";
import Vector from "../images/Vector.png";
import "./Movie.css";
import MovieChips from "../components/MovieChips";

const categories = [
  {
    id: "Action",
    color: "#FF5209",
    image: <img src={Action} style={{ width: "140px", height: "90px" }} />,
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: <img src={Drama} style={{ width: "140px", height: "90px" }} />,
  },
  {
    id: "Romance",
    color: "#148A08",
    image: <img src={Romance} style={{ width: "140px", height: "90px" }} />,
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: <img src={Thriller} style={{ width: "140px", height: "90px" }} />,
  },
  {
    id: "Western",
    color: "#902500",
    image: <img src={Western} style={{ width: "140px", height: "90px" }} />,
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: <img src={Horror} style={{ width: "140px", height: "90px" }} />,
  },
  {
    id: "Fantasy",
    color: "#FF4ADE",
    image: <img src={Fantasy} style={{ width: "140px", height: "90px" }} />,
  },
  {
    id: "Music",
    color: "#E61E32",
    image: <img src={Music} style={{ width: "140px", height: "90px" }} />,
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: <img src={Fiction} style={{ width: "140px", height: "90px" }} />,
  },
];

function Movie() {

  const [selected, setSelected] = useState([]);

  const navigate = useNavigate();

  const nextHandler = ()=>{
    if(selected.length>=4){
      localStorage.setItem("movies",JSON.stringify(selected)) 
      navigate('/Display');
    }
  }  

  return (
    <div className="wrapper">
      <div className="movie">
        <div className="filterBox">
          <h1 className="super">Super app</h1>
          <div className="choose">
            <h2>Choose your</h2>
            <h2>entertainment</h2>
            <h2>category</h2>
          </div>
          <div className="chips">
            {
              selected.map((item)=>{
                return(
                  <MovieChips key={item} data={item} selected={selected} setSelected={setSelected}/>
                )
              })
            }
          </div>
          <div style={{color:"red"}}>
          {selected.length<4?<div><img src={Vector} style={{width:"18px"}}/>&nbsp; &nbsp;Minimum 4 category required</div>:<></>}
          </div>
        </div>
        <div className="itemBox">
          {categories.map((item) => {
            return (
              <MovieBox
                key={item.id}
                data={item}
                selected={selected}
                setSelected={setSelected}
              />
            );
          })}
        </div>
      </div>
      <button className="nextbtn" onClick={nextHandler}>Next Page</button>
    </div>
  );
}

export default Movie;
