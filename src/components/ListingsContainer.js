import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDeleteClick, search }) {
  // console.log(listings)
  const listingsList = listings
    .filter(listing => listing.description.includes(search))
    .map((listing) => (
      <ListingCard 
        listing={listing}
        onDeleteClick={onDeleteClick}
      />
    ))
  

  return (
    <main>
      <ul className="cards">
        {listingsList}
      </ul>
    </main>
  );
}

export default ListingsContainer;
