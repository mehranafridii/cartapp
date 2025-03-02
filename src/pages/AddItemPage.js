import React, { useState } from "react";
import { addItem } from "../api/apiService";

const AddItemPage = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addItem("items", { name, price, img });
    alert("Item Added!");
  };

  return (
    <div className="container mt-5">
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control mb-2"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="form-control mb-2"
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          className="form-control mb-2"
          required
        />
        <button type="submit" className="btn btn-success">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItemPage;
