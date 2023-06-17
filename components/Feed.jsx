"use client"

import React from 'react'
import Newscard from './Newscard'
import {useEffect, useState, createContext}from 'react'

// const EndpointContext = createContext()
const Feed = ({endpoint, setEndpoint, showTrending}) => {
const [feedlist, setFeedlist]=useState([]);
const [favlist,setFavlist]=useState([]);
// const [endpoint,setEndpoint]=useState('');
const fetchdata = async ()=>{
    var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=484c5b7d6e6941e38c2d30ffea3ea41c';
    
    if(showTrending){
      const items = JSON.parse(localStorage.getItem('favItems'));
      if (items) {
      // setItems(items);
      // console.log(items)
      setFeedlist(items)
      // setFavlist(items);
      }
      // console.log("favlist",favlist)
    }
    else{
      const response = await fetch(endpoint);
      const data = await response.json();
      // console.log(data);
      setFeedlist(data["articles"]);
      console.log("feedlist",feedlist,typeof(feedlist))
    }
    
  
           
    
}
useEffect(()=>{
    
  fetchdata();
  console.log("updated")
},[endpoint])



  return (
    <div className="row text-center mx-auto" style={{width:"90%"}}>
         {feedlist.map((feed) => (
       
          <Newscard favlist={favlist} setFavlist={setFavlist} key={feed.id} feed={feed} showTrending={showTrending} />
         
      ))}
    </div>

  )
}

export default Feed