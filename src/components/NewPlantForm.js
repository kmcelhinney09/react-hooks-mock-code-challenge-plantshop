import React, { useState } from "react";

function NewPlantForm({ onFormSubmit }) {
  const [plantFormData, setPlantFormData] = useState({
    name: "",
    image: "",
    price: "",
  })

  function handleChange(e) {
    const type = e.target.type
    const name = e.target.name
    let value = e.target.value
    setPlantFormData({ ...plantFormData, [name]: type === "number" ? parseFloat(value) : value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    onFormSubmit(plantFormData)
    setPlantFormData({
      name: "",
      image: "",
      price: "",
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={plantFormData.name} onChange={handleChange} />
        <input type="text" name="image" placeholder="Image URL" value={plantFormData.image} onChange={handleChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={plantFormData.price} onChange={handleChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
