import React, { useState } from 'react'
import AddPlant from './AddPlant'
import { Card } from '@material-ui/core'
import Axios from "axios"



const UserPlantList = ({setPlants, plants, user_id}) => {
  const [isHidden, setHide] = useState(true)

  const deletePlant = (plant_id) => {
    console.log(user_id, plant_id)
    Axios.delete('https://plant-server-clairesheek.vercel.app/users/delete', {
      data: {user_id: user_id,
      plant_id: plant_id}
    }).then((res) => {
      console.log(res)
      setPlants(plants)
    })
  }


  return (
    <ul className="userPlantList">
      {isHidden ? 
        <button onClick={() => {isHidden ? setHide(false) : setHide(true)}}> Add New Plant </button> :
        <AddPlant setHide={setHide} isHidden={isHidden}/>
      } 
      {/* <AddPlant /> */}
    {plants && plants.map((plant, idx) => (
        <Card >
          <li className="userPlant">
            <h3 id="common">{plant.Common}</h3> 
             <div className="image" id="plantImage">
                <img src={plant.Image} alt={"Image of " + plant.Common}></img>
              </div>
              <section id="scientific">
                <h4>Scientific Name: </h4> 
                <p>{plant.Scientific}</p>
              </section>
              <section id="family">
                <h4>Family Name: </h4> 
                <p>{plant.Family}</p>
              </section>
            {/* </div>
            <div className="userPlantDetails"> */}
              <section id="water">
                <h4>Water:</h4> 
                <p>{plant.Water}</p>
              </section>
              <section id="soil">
                <h4>Soil:</h4> 
                <p>{plant.Soil}</p>
              </section>
              <section id="light">
                <h4>Light:</h4> 
                <p>{plant.Light}</p>
              </section>
              <section id="fertilizer">
                <h4>Fertilize:</h4> 
                <p>{plant.Fertilization}</p>
              </section>
              <button id="close" onClick={() => {deletePlant(plant.plant_id)}}>REMOVE</button>
            {/* </div> */}
          </li>
        </Card>
    ))}
  </ul>
  )
}

export default UserPlantList
