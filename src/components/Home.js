import React, {useState, useEffect}from 'react'
import Banner from './Banner'
import SearchBar from './SearchBar'
import Gallery from './Gallery'



const Home = () => {

  const [plants, setPlants] = useState([])

  const url = "https://plant-server.vercel.app/plants"

  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then(data => setPlants(data))
    }, [])

    // console.log("Home: ", plants)
    return (
        <div className="home">
          <Banner image="https://res.cloudinary.com/dvekbv6m5/image/upload/v1617239317/PlantApp/housePlants1_g55qo8.jpg"
                  sub="Feed Me"
                  title="Seymour"
                  body="Don't make your houseplants angry! With Seymour you can see what your plants need to be happy, add plants to your profile, and set up a schedule to remind you to water and feed your plants!"/>
          <SearchBar placeholder="Find Your Plant"/>
          <Gallery plants={plants}/>
        </div>
    )
}

export default Home