import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushi, onEat }) {
  const[offset, setOffset] = useState(0);

  function incrementOffset() {
    setOffset((offset + 4) % sushi.length);
  }

  return (
    <div className="belt">
      { sushi.slice(offset, offset + 4).map(item => (
        <Sushi key = { item.id } sushi = { item } onEat = { onEat } />
      )) }
      <MoreButton onClick = { incrementOffset } />
    </div>
  );
}

export default SushiContainer;
