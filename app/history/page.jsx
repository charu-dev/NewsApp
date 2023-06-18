"use client"
import {useEffect, useState} from 'react'
import {useSession} from 'next-auth/react'
import Suitcollection from '@/components/Suitcollection';
const Myhistory = () =>{
    const { data: session } = useSession();
    const [allHistory, setHistory]=useState([])
    // console.log("sessionrequest",session)

    const fun = async () =>{
        console.log("sessionrequerst",session)
        const response = await fetch(`/api/suit/${session?.user.id}`);
        const data = await response.json();
        setHistory(data);
        console.log("historydatahere",allHistory)
        // console.log(allHistory)
    }
   
    useEffect(()=>{
        // setTimeout(()=>{fun()},0);
        fun();

    }, [session]);

    return(
  
       <Suitcollection allHistory={allHistory} />
      
  
    )

}

export default Myhistory