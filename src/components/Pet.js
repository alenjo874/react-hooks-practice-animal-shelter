import React from "react";

function Pet({id, name, type, gender, age, weight, isAdopted}) {

  const adoptedButton =  <button className="ui disabled button">Already adopted</button>
  const adoptButton =  <button className="ui primary button">Adopt pet</button>

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {gender === "female" ? '♀' : '♂' }
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
       
       {isAdopted ? adoptedButton : adoptButton}
      </div>
    </div>
  );
}

export default Pet;
