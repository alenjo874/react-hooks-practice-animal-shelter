import React from "react";

import Pet from "./Pet";

function PetBrowser({pets}) {
  
  const displayPets = pets.map(pet => {
    return (
      <Pet key={pet.id} {...pet}/>
    )
  })

  return <div className="ui cards">{displayPets}</div>;
}

export default PetBrowser;
