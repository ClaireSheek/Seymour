import React, {useState, useEffect }from 'react'
import Banner from './Banner'
// import SearchBar from './SearchBar'
import UserPlantList from './UserPlantList'

const Profile = (props) => {
  const [plants, setPlants] = useState([])
  let user_id = props.location.userID

  const url = `https://plant-server-clairesheek.vercel.app/users/${props.location.userID}`

  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then(data => setPlants(data))
    }, [plants])


    return (
        <div className="profile">
          <Banner image="https://res.cloudinary.com/dvekbv6m5/image/upload/v1617239307/PlantApp/housePlant6.jpg"
                  sub="Feed Me"
                  title={props.location.username}
                  body="Welcome to your Terrarium.
                  View and edit your plant list here, or add more plants to our database"/>
          {/* <SearchBar placeholder={"Search your plants"} plants={plants}/> */}
          <UserPlantList setPlants={setPlants} plants={plants} user_id={user_id}/>
        </div>
    )
}

export default Profile