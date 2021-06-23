import React from 'react'
import Thumbnail from './Thumbnail'



const Gallery = ({plants, userID, loggedIn}) => {


  return (
    <ul className="gallery">
      {plants && plants.map((plant, idx) => (
        <Thumbnail key={idx} plant={plant} userID={userID} loggedIn={loggedIn}/>
      ))}
    </ul>
  )
}

export default Gallery
