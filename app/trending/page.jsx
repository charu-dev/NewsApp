"use client"
import { set } from "mongoose";
import Feed from "../components/Feed";
import SearchTab from "../components/SearchTab";
import {useState} from 'react'
const Home = () => {

  const [endpoint,setEndpoint] =useState('https://newsapi.org/v2/top-headlines?country=us&apiKey=484c5b7d6e6941e38c2d30ffea3ea41c');

  return (<section className='w-full flex-center flex-col'>
  <h1 className='head_text text-center'>
    Discover & Share
    <br className='max-md:hidden' />
    <span className='orange_gradient text-center'>News App @CharuWorld </span>
  </h1>
  <p className='desc text-center'>
    Here are some of the top selected News Feeds from our Users.
  </p>
  {/* <SearchTab endpoint={endpoint} setEndpoint={setEndpoint} /> */}
  <Feed  endpoint={endpoint} setEndpoint={setEndpoint} showTrending={true} />
</section>)
};

export default Home;