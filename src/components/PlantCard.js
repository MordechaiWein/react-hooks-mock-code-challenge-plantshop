import React, {useState} from "react";

function PlantCard({
  name,
  image,
  price
 }) {

  const [inventory, setInventory] = useState(true)

  function inventoryStatus() {
    setInventory(() => !inventory)
  }

  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inventory ? (
        <button onClick={inventoryStatus} className="primary">In Stock</button>
      ) : (
        <button onClick={inventoryStatus}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
