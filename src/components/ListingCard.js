import React, { useState } from "react";

function ListingCard({ listing, onDeleteClick }) {
  console.log(listing)
  const {id, description, image, location} = listing;
  const [displayStar, setDisplayStar] = useState(false);

  function handleDeleteClick() {
    onDeleteClick(id);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {displayStar ? (
          <button 
            className="emoji-button favorite active" 
            onClick={() => {
              setDisplayStar(!displayStar)
            }}
          >★</button>
        ) : (
          <button 
            className="emoji-button favorite"
            onClick={() => setDisplayStar(!displayStar)}
          >☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button 
          className="emoji-button delete"
          onClick={handleDeleteClick}
        >🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
