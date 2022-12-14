import React, {useState} from "react";

function NewPlantForm({addPlant}) {

  const [data, setData] = useState({
    name:"",
    image:"",
    price:""
  })

  function handleChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  function submitNewPlant(e) {
    e.preventDefault()
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => addPlant(data))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={submitNewPlant}>
        <input onChange={handleChange} type="text" name="name"  placeholder="Plant name" />
        <input onChange={handleChange} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
