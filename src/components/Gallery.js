import React from 'react'
import Thumbnail from './Thumbnail'


const Gallery = ({plants}) => {



  return (
    <ul className="gallery">
      {plants && plants.map((plant, idx) => (
        <li>
          <Thumbnail key={idx} plant={plant}/>
        </li>
      ))}
    </ul>
  )
}

export default Gallery
