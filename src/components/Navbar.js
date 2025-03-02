import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: "#f8f9fa", // Light gray background
        padding: "10px 20px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Subtle shadow
      }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <NavLink className="navbar-brand" to="/" style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
          My Shop
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link px-3"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                  color: isActive ? "#007bff" : "#000",
                })}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/items"
                className="nav-link px-3"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                  color: isActive ? "#007bff" : "#000",
                })}
              >
                Items
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/add"
                className="nav-link px-3"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                  color: isActive ? "#007bff" : "#000",
                })}
              >
                Add Item
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/checkout"
                className="nav-link px-3 d-flex align-items-center"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                  color: isActive ? "#007bff" : "#000",
                })}
              >
                Checkout
                <span
                  className="badge bg-primary ms-2"
                  style={{
                    fontSize: "0.7rem",
                    padding: "4px 8px",
                    borderRadius: "50%",
                  }}
                >
                  {cartCount}
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
