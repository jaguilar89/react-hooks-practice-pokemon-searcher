import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokeCard }) {
  const [isFrontDisplay, setIsFrontDisplay] = useState(true);
  const {name, hp, sprites} = pokeCard

  function toggleDisplay() {
    setIsFrontDisplay((isFrontDisplay) => !isFrontDisplay)
  };

  return (
    <Card>
      <div onClick={toggleDisplay}>
        <div className="image">
          <img src={isFrontDisplay ? sprites.front : sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
