import React from "react";

const CheckoutPage = ({ cart, setCart }) => {
  // Calculate total price
  const totalPrice = cart.reduce(
    (sum, item) => sum + parseFloat(item.price),
    0
  );

  // Function to remove an item from the cart
  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  return (
    <div className="container mt-5">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {item.name} - ${item.price}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeItem(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="alert alert-info">
            <strong>Total Items:</strong> {cart.length} <br />
            <strong>Total Price:</strong> ${totalPrice.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
