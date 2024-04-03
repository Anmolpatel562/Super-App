import './Mountain.css';
import mountain from "../images/mountain.png";
import axios from 'axios';
import {useState,useEffect} from 'react';

function Mountain(){
    const [news,setNews] = useState(null);
    const [index,setIndex] = useState(null);

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
        // fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0dc6223e1fd040c78669cc6ef79e2d4a")
        fetch("https://api.worldnewsapi.com/search-news?text=cricket&language=en&api-key=e4504c2b21f6411f8ad0697d9ff579fe").then(
            (res)=>{
                return res.json();
            }
        ).then((data)=>{
            setNews(data);
        }).catch((error)=>{
            console.log(error);
        })
        setIndex(Math.floor(Math.random() * 19));
    },[]);
    
    return (
        <div className='mountainDescriptionContainer'>
            {/* {}
             {news?<img className='mountainImg' src={news.articles[index].urlToImage}></img>:<></>}
             {news?<h1 className='blackBox'>{news.articles[index].title}</h1>:<></>}
             {news?<p className='desc'>{news.articles[index].description}...</p>:<></>} */}
             {news ? <img width={350} height={260} src={news.news[3].image} /> : <></>}
             {news ? <h1 style={{backgroundColor:"black",color:"white",padding:"1rem",fontSize:"20px"}}>{news.news[3].title}</h1> : <></>}
      {news ? <p style={{padding:"1rem"}}>{news.news[3].text.slice(0, 300)}...</p> : <></>}
        </div>
    )
}
export default Mountain;