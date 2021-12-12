import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");
  

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then(data => setListings(data))
  }, []);

  function handleDeleteClick(id) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        const updatedListings = listings.filter((listing) => listing.id !== id);
        setListings(updatedListings);
      });
  }

  return (
    <div className="app">
      <Header 
        search={search}
        onSearchChange={setSearch}
      />
      <ListingsContainer 
        listings={listings}
        onDeleteClick={handleDeleteClick} 
        search={search}
      />
    </div>
  );
}

export default App;
