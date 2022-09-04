import React from "react";
import vincent from "../images/Vincent_Portrait.webp";
import cloud from "../images/Cloud_Portrait.webp";
import zack from "../images/zack-fair.jpeg";

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
      <img
        // src={cloud}
        src={vincent}
        alt="Cloud Strife Portrait"
        width={"auto"}
        height={170}
      />
      <div className="container-char">
        <p>Nick</p>
        <div className="container-char-meta">
          <span>
            <span className="char-meta">LV </span>15
          </span>
          <span>
            <span className="char-meta">HP </span>498 / 498
            <div className="health-bar"></div>
          </span>
          <span className="parent-container-mp">
            <span className="char-meta">MP </span>
            <div className="container-mp">
              <span>111 / 111</span>
              <div className="mp-bar"></div>
            </div>
          </span>
        </div>
      </div>
      <div className="container-char-level-limit">
        <p className="level-text">next level</p>
        <div className="level">
          <div className="level-bar"></div>
        </div>
        <p className="level-text">Limit level 1</p>
        <div className="limit">
          <div className="limit-bar"></div>
        </div>
      </div>
    </div>
  );
}

export default CharacterCards;
