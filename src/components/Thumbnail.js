import React, {useState} from 'react'
import { Card } from '@material-ui/core'
import PlantDetails from './PlantDetails'
import Axios from 'axios';
import Login from './Login'


const Thumbnail = (props) => {
  const { Common, plant_id, Image } = props.plant
  const [addPlant, ConfirmAdd] = useState("+")

  const name = Common.split(',')[0]
  
  const thumbnailStyle = {
    backgroundImage: `url(${Image})`
  }

  const addPlantToProfile = (e) => {
    e.preventDefault();
    if (!props.loggedIn){
      ConfirmAdd(<Login />)
    }
    else{
      Axios.post('https://plant-server-clairesheek.vercel.app/users/add', {
        user_id: props.userID,
        plant_id: plant_id
      }).then((res) => {
        console.log(res)
        ConfirmAdd("Added")
      })
    }
  }

  return (
    <Card className="thumbnail" style={thumbnailStyle}>
      <li>
        <div className="overlay">
          <div className="details">
            <div className="topBar">
              <button><h2 onClick={addPlantToProfile}>{addPlant}</h2></button>
              <PlantDetails plant={props.plant}/>
            </div>
            <h4>{name.toUpperCase()}</h4>
          </div>
        </div>        
      </li>
    </Card>
  )
}

export default Thumbnail
