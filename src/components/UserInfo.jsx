import React from "react";
import cartoon from "../images/cartoon.png";
import "./UserInfo.css";
import SelectedMovies from "./selectedMovies";


export default function UserInfo() {
  const userData = JSON.parse(localStorage.getItem('userInfo'));  
  const movies = JSON.parse(localStorage.getItem('movies'));
  return (
    <div className="info">
      <img src={cartoon} className="cartoonImg"></img>
      <div className="userInfo">
        <h2 className="name">{userData.name}</h2>
        <h2 className="email">{userData.email}</h2>
        <h1 className="userName">{userData.userName}</h1>
        <div className="movies">
        {  
          movies.map((item)=>{
            return(
                <SelectedMovies key={item} movies={item}/>
            )
          })  
        }   
        </div>
      </div>
    </div>
  );
}
