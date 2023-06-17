"use client"
import React from 'react'
import {signIn, signOut, useSession} from 'next-auth/react'


const Nav = () => {

  const session=useSession();
  console.log("session",session)
    // const loggedIn=true;
if(session?.data){console.log("welcome bro")}
  return (
  
<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
  <a class="navbar-brand" href="/">NewsApp</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="d-flex">
 {session?.data ?( <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/trending">Trending</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">History</a>
      </li>
      <li class="nav-item">
        <a class="nav-link ">Profile</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " onClick={signOut}>Sign Out</a>
      </li>
    </ul>
  </div>):(
     <div class="collapse navbar-collapse" id="navbarNav">
     <ul class="navbar-nav">
       
       <li class="nav-item">
         <a class="nav-link active" aria-current="page" href="#">Home</a>
       </li>
       <li class="nav-item">
         <a class="nav-link" onClick={signIn}>Sign In</a>
       </li>
     </ul>
   </div>
  )}</div>
</div>
</nav>

  )
}

export default Nav