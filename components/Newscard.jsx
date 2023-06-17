"use client"
import React from 'react'
import Image from "next/image";

const Newscard = ({feed}) => {
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
      <a href={feed.url} target="_blank" class="btn btn-success" onClick={}>Like</a>
    </div>
  </div>
  )
}

export default Newscard