import React from 'react'

const Suitcomponent = ({suit}) => {
  return (
    <div>
        <p>{suit.query}</p>
        <p>{suit.fromd}</p>
        <p>{suit.tilld}</p>
    </div>
  )
}

export default Suitcomponent