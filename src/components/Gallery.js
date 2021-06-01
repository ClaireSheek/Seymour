import React from 'react'
import Thumbnail from './Thumbnail'
import { Route } from 'react-router'
import UserPlantList from './UserPlantList'


const Gallery = ({plants}) => {



  return (
    <ul className="gallery">
      {plants && plants.map((plant, idx) => (
        <li>
            <Route exact path="/" render={props => <Thumbnail key={idx} plant={plant}/>} />
            <Route path="/profile" render={props => <UserPlantList key={idx} plant={plant}/>} />
          {/* <Thumbnail key={idx} plant={plant}/>
          <UserPlantList key={idx} plant={plant}/> */}
        </li>
      ))}
    </ul>
  )
}

export default Gallery
