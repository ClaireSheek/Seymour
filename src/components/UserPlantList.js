import React from 'react'


const UserPlantList = ({plant}) => {

  const backgroundStyle = {
    backgroundImage: `url(${plant.Image})`
  }

  return (
        <li>
          <div className="image" style={backgroundStyle}>
            <h3>Common Name:</h3> 
            <h1>{plant.Common}</h1> 
          </div>
          <h4>Scientific Name: {plant.Scientific}</h4> 
          <h4>Family Name: {plant.Family}</h4> 
          <h4>Water:</h4> 
          <p>{plant.Water}</p>
          <h4>Soil:</h4> 
          <p>{plant.Soil}</p>
          <h4>Light:</h4> 
          <p>{plant.Light}</p>
          <h4>Fertilize:</h4> 
          <p>{plant.Fertilization}</p>
          {/* <Thumbnail key={idx} plant={plant}/> */}
        </li>
  )
}

export default UserPlantList
