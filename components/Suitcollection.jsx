import React from 'react'

const Suitcollection = ({allHistory}) => {
  return (
    <div>{allHistory?.map((element)=>(
        <div>{element.query}</div>
    ))}</div>
  )
}

export default Suitcollection