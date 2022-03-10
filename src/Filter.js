import React from "react";

export const Filter = ({ title, onlyFavorites, setOnlyFavorites }) => {
  return (
    <div>
      <input type="checkbox" checked={onlyFavorites} onClick={(e) => setOnlyFavorites(e.target.checked)} />
      <div>{title}</div>
    </div>
  )
}