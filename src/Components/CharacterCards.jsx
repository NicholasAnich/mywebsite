import React from "react";
import MagicBars from "./MagicBars";
import LevelBars from "./LevelBars";
import Portrait from "./Portrait";

function CharacterCards() {
  return (
    <div className="card character container">
      <Portrait />
      <div className="character-details">
        <span className="author">Nick</span>
        <div className="bars">
          <MagicBars />
          <LevelBars />
        </div>
      </div>
    </div>
  );
}

export default CharacterCards;
