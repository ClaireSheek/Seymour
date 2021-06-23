import React, {useState} from 'react'
import Axios from 'axios'

const AddPlant = (props) => {
  const [newPlant, setNewPlant] = useState({
    Common: "",
    Image: null,
    Scientific: "",
    Family: "",
    Water: "",
    Soil: "",
    Light: "",
    Fertilization: ""
  })

  // const handleChange = 
  //   React.useCallback((event) => setNewPlant({ [event.target.name]: event.target.value}), 
  //   console.log(newPlant), [newPlant]);

  const handleChange = (e) => {
    console.log(e.target.type)
    const newState = { ...newPlant }
    if(e.target.type === "file") {
      newState[e.target.name] = e.target.files[0]
    } else {
        newState[e.target.name] = e.target.value
    }
    setNewPlant(newState)
    console.log(newPlant)
  };

  

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newPlant)
    Axios.post('https://plant-server.vercel.app/plants/new', {
      common: newPlant.Common,
      // image: newPlant.Image,
      scientific: newPlant.Scientific,
      family: newPlant.Family,
      water: newPlant.Water,
      light: newPlant.Light,
      fertilization: newPlant.Fertilization,
      soil: newPlant.Soil
    }).then((res) => {
      console.log(res)
    })
  }



  return (
    <li >
    <form className="userPlant" onSubmit={handleSubmit}>
        <label id="common">Common Name:
          <input
          name="Common"
          placeholder="Commonly Known As"
          type="text"
          value={newPlant.Common}
          onChange={handleChange}
          required />
        </label > 
        {/* <label for="image">Image:
          <input 
          type="file" 
          name="Image" 
          // onChange={(e) => setSelectedImage(e.target.files[0])}
          onChange={handleChange}
          required />
        </label> */}
        <label id="scientific"> Scientific Name:
          <input
          name="Scientific"
          placeholder="Scientific Name"
          type="text"
          value={newPlant.Scientific}
          onChange={handleChange}
           />
        </label> 
        <label id="family">Family Name:
          <input
          name="Family"
          placeholder="Family Classification"
          type="text"
          value={newPlant.Family}
          onChange={handleChange}
           />
        </label> 
        <label id="water">Water:
          <input
          name="Water"
          placeholder="Watering Instructions"
          type="text"
          value={newPlant.Water}
          onChange={handleChange}
          required />
        </label> 
        <label id="soil">Soil:
          <input
          name="Soil"
          placeholder="Prefered Soil Type"
          type="text"
          value={newPlant.Soil}
          onChange={handleChange}
           />
        </label> 
        <label id="light">Light:
          <input
          name="Light"
          placeholder="Light Requirements"
          type="text"
          value={newPlant.Light}
          onChange={handleChange}
          required />
        </label> 
        <label id="fertilizer">Fertilization:
          <input
          name="Fertilization"
          placeholder="Fertilizer Instructions"
          type="text"
          value={newPlant.Fertilization}
          onChange={handleChange}
           />
        </label>
          <button id="save" type="submit">Save</button>
          <button id="close" onClick={() => {props.isHidden ? props.setHide(false) : props.setHide(true)}}>Close</button>  
      </form>
    </li>
  )
}

export default AddPlant
