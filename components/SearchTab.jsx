"use client"
import { useSession } from 'next-auth/react'
import React from 'react'
// import EndpointContext from './Feed.jsx'
import {useEffect, useState,  createContext, useContext} from 'react'

const SearchTab = ({endpoint, setEndpoint}) => {
    // const {endpoint} = useContext(EndpointContext);
    const {data: session}= useSession()
    const [allValues, setAllValues] = useState({
        query: '',
        domain: '',
        country: '',
        source: '',
        category: '',
        fromd:'',
        tilld:'',
     });
     const changeHandler = e => {
        setAllValues({...allValues, [e.target.name]: e.target.value})
        
     }

     const submitButton = async (e)=>{
        e.preventDefault();
        let newstr=`https://newsapi.org/v2/everything?q=${allValues.query}&from=${allValues.fromd}&to=${allValues.tilld}&apiKey=484c5b7d6e6941e38c2d30ffea3ea41c`;

        try {
         
          const response = await fetch("/api/suit/new", {
            method: "POST",
            body: JSON.stringify({
              query: allValues.query,
              fromd: allValues.fromd,
              tilld: allValues.tilld,
              userId: session?.user.id,
            }),
          });
          if(response.ok){
            console.log("finalyycuties")
          }
          else{
            console.log("as")
          }
        } catch (error) {
          console.log("supererrordetected",error);
        } 

        setEndpoint(newstr);
        console.log("allValues",endpoint);
        
     }
  return (
    <div class="ms-10">
        
    <form onSubmit={submitButton}>  
    <div class="form-group">
      <label for="exampleInputEmail1">Query</label>
      <input name="query" type="string" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Query" onChange={changeHandler}  />
      
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">From Date</label>
      <input name="fromd"  type="string" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="yyyy-mm-dd" onChange={changeHandler} />
      
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Till Date</label>
      <input name="tilld"  type="string" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="yyyy-mm-dd"  onChange={changeHandler}/>
      
    </div>
    {/* <div class="form-group">
      <label for="exampleInputEmail1">Domain</label>
      <input name="domain" type="string" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Domain" onChange={changeHandler} />
      
    </div> */}
    {/* <div class="form-group">
      <label for="exampleInputEmail1">Country</label>
      <input name="country" type="string" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Country"  onChange={changeHandler}/>
      
    </div> */}
    {/* <div class="form-group">
      <label for="exampleInputEmail1">Source</label>
      <input name="source" type="string" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Source" onChange={changeHandler} />
      
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Category</label>
      <input name="category" type="string" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Category"  onChange={changeHandler}/>
      
    </div> */}
    
    <button  class="btn btn-primary" type="submit" >Submit</button>
  </form>
  </div>
  )
}

export default SearchTab