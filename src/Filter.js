import React from "react";
import "./Filter.css";

export const Filter = ({ title, onlyFavorites, setOnlyFavorites }) => {
  const handleChange = (e) => {
    setOnlyFavorites(e.target.checked)
  }
  return (
    <div className="filter" diplay="flex">
      <input className="filter-checkbox" type="checkbox" onChange={handleChange} value={onlyFavorites} />
      <div style={{ marginLeft: "10px" }}>{title}</div>
    </div>
  )
}