import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, search }) {

  const plantsToDisplay = plants
  .filter((plant) => (
    plant.name.toUpperCase().includes(search.toUpperCase())
    ))
    .map((plant) => {
      return (
      <PlantCard key={plant.id} image={plant.image} name={plant.name} price={plant.price}/>
      )
  })

  return (
    <ul className="cards">{plantsToDisplay}</ul>
  );
}

export default PlantList;
