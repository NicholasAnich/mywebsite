import React from "react";

function LevelBars() {
  return (
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
  );
}

export default LevelBars;
