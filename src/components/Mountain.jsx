import './Mountain.css';
import mountain from "../images/mountain.png";
import axios from 'axios';
import {useState,useEffect} from 'react';

function Mountain(){
    const [news,setNews] = useState(null);

    function fetchNews(){
        // axios.get("https://newsapi.org/v2/everything?q=tesla&from=2024-02-05&sortBy=publishedAt&apiKey=0dc6223e1fd040c78669cc6ef79e2d4a")
        // .then((res)=>{
        //    setNews(res.data.articles);
        // }).catch((error)=>{
        //    console.log("Error Comming") 
        //    console.log(error)
        //})
    }
    useEffect(()=>{
        fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0dc6223e1fd040c78669cc6ef79e2d4a").then(
            (res)=>{
                return res.json();
            }
        ).then((data)=>{
            setNews(data);
        }).catch((error)=>{
            console.log(error);
        })
    },[]);
    var index = Math.floor(Math.random() * 19);

    return (
        <div className='mountainDescriptionContainer'>
             {news?<img className='mountainImg' src={news.articles[index].urlToImage}></img>:<></>}
             {news?<h1 className='blackBox'>{news.articles[index].title}</h1>:<></>}
             {news?<p className='desc'>{news.articles[index].description.slice(0,700)}...</p>:<></>}
        </div>
    )
}
export default Mountain;