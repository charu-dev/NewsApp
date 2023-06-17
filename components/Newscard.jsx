"use client"
import React from 'react'
import Image from "next/image";

const Newscard = ({favlist, setFavlist, feed, showTrending}) => {

  const setFeedfav = (feed)=>{
    // e.preventDefault()
    let oldar=favlist;
    oldar.push(feed)
    setFavlist(oldar);
    localStorage.setItem('favItems', JSON.stringify(favlist));
    console.log("aaga",favlist)
  }

    // console.log(key)
  return (
   <div class="card col-3" style={{width:"18rem"}, {margin:"15px"}}>
    <Image src="/vercel.svg" className="card-img-top" alt="" height={40} width={18}/>
    <div class="card-body">
      <h5 class="card-title">{feed.title}</h5>
      <p class="card-text">{feed.content}</p>
      <p class="card-text">{feed.publishedAt}</p>
      <a href={feed.url} target="_blank" class="btn btn-primary">Full Article</a>
      <br></br>
      {!showTrending?(<button target="_blank" class="btn btn-success" onClick={()=>setFeedfav(feed)}>Like</button>):(<></>)}
    </div>
  </div>
  )
}

export default Newscard