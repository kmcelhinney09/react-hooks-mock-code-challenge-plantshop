import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ isLoaded, plantList}) {
  const renderPlantsList = plantList.map(plant => <PlantCard key={plant.id} name={plant.name} image={plant.image} price={plant.price}/>)
  return (
    <ul className="cards">{!isLoaded? <li>"Loading Plants...."</li>: renderPlantsList}</ul>
  );
}

export default PlantList;
