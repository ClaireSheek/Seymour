import React, {useState, useEffect }from 'react'
import Banner from './Banner'
import SearchBar from '../components/SearchBar'
import Gallery from './Gallery'


const Profile = (props) => {
  // const {username} = props
console.log("Profile Props: ", props)

  const [plants, setPlants] = useState([])

  const url = "http://localhost:4000/users/6"

  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then(data => setPlants(data))
    }, [])
  // console.log(username, plants)

  // const fetch = (e) => {
  //   e.preventDefault();
  //   // console.log(email, pass)
  //   Axios.get('http://localhost:4000/users/6'
  //   .then((res) => {
  //       setPlants(res)
  //   }))}

    return (
        <div className="profile">
          <Banner image="https://res.cloudinary.com/dvekbv6m5/image/upload/v1617239307/PlantApp/housePlant6.jpg"
                  sub="Feed Me"
                  title={props.location.username}
                  body="Welcome to your Terrarium.
                  View your plants etc….
                  Add plants… More Description… coming soon."/>
          <SearchBar placeholder={"Search your plants"}/>
          <Gallery plants={plants}/>
        </div>
    )
}

export default Profile