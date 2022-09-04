import React from "react";

function MagicBars() {
  return (
    <div className="container-char">
      <div className="container-char-meta">
        <span>
          <span className="char-meta">LV </span>31
        </span>

        <span className="parent-container-hp">
            <span className="char-meta">HP </span>
            <div className="container-hp">
              <span className="char-stat-numbers">1522/ 1522</span>
              <div className="hp-bar"></div>
            </div>
        </span>

        <span className="parent-container-mp">
          <span className="char-meta">MP </span>
          <div className="container-mp">
            <span>244/ 244</span>
            <div className="mp-bar"></div>
          </div>
        </span>

      </div>
    </div>
  );
}

export default MagicBars;
