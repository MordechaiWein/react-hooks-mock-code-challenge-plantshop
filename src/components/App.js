import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(data => setPlants(data))
  },[])

  function addPlant(coolPlant) {
   setPlants([...plants, coolPlant])
  }
  
  return (
    <div className="app">
      <Header />
      <PlantPage addPlant={addPlant} plants={plants} search={search} setSearch={setSearch} />
    </div>
  );
}
export default App;
