import React from "react";
import "./Filter.css";

export const Filter = ({ title, onlyFavorites, setOnlyFavorites }) => {
  return (
    <div className="filter" diplay="flex">
      <input className="filter-checkbox" type="checkbox" checked={onlyFavorites} onClick={(e) => setOnlyFavorites(e.target.checked)} />
      <div style={{ "margin-left": "10px" }}>{title}</div>
    </div>
  )
}