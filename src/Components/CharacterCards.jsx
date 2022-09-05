import React from "react";
import MagicBars from "./MagicBars";
import LevelBars from "./LevelBars";
import Portrait from "./Portrait";

function CharacterCards() {
  const characters = [
    {
      name: "Cloud",
      lvl: 15,
      hp: 548,
      mp: 121,
      nxtLvl: 50,
      limit: 1,
    },
    {
      name: "Aerith",
      lvl: 13,
      hp: 449,
      mp: 108,
      nxtLvl: 0,
      limit: 1,
    },
    {
      name: "Red XIII",
      lvl: 15,
      hp: 598,
      mp: 111,
      nxtLvl: 77,
      limit: 1,
    },
  ];

  return (
    <div className="card character">
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
