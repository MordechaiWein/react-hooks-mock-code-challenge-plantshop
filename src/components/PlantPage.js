import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, setSearch, search, addPlant}) {
  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search setSearch={setSearch}/>
      <PlantList search={search} plants={plants} />
    </main>
  );
}

export default PlantPage;
