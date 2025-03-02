import React, { useState, useEffect } from "react";
import { API_URL, getItems } from "../api/apiService";

const ItemsPage = ({ addToCart }) => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search input

  useEffect(() => {
    getItems("items")
      .then((data) => setItems(data))
      .catch((err) => {
        alert(JSON.stringify(err));
        console.log(err, "Error fetching items");
      });
  }, []);

  // Filter items based on search term
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Shop Items</h2>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="row g-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className="col-md-4 col-sm-6">
              <div className="card item-card shadow-sm border-0">
                <img
                  src={API_URL + item.img}
                  className="card-img-top item-image"
                  alt={item.name}
                />
                <div className="card-body text-center">
                  <h5 className="item-name">{item.name}</h5>
                  <p className="item-price">${item.price}</p>
                  <button
                    className="btn btn-primary w-100"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart 🛒
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No items found.</p>
        )}
      </div>
    </div>
  );
};

export default ItemsPage;
