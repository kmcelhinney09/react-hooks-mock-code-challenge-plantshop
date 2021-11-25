import React, { useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [plantSearchArray, setPlantSearchArray] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then(plants => {
      setPlants(plants)
      setIsLoaded(true)
    })
  },[])

  function handleNewPlant(newPlant){
    fetch('http://localhost:6001/plants',{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
    .then(res => res.json())
    .then(newPlantData => setPlants([...plants, newPlantData]))
  }

  function handleSearch(searchText){
      const plantSearch = plants.filter(plant => {
        if(searchText === ""){
          return true
        } else{
           return plant.name.toLowerCase().includes(searchText.toLowerCase())
        }
      })
      setPlantSearchArray(plantSearch)
  }

  return (
    <main>
      <NewPlantForm onFormSubmit={handleNewPlant}/>
      <Search onSearch={handleSearch}/>
      <PlantList isLoaded={isLoaded} plantList={plantSearchArray.length === 0? plants: plantSearchArray}/>
    </main>
  );
}

export default PlantPage;
