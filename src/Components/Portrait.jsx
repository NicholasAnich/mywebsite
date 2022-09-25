import React from "react";
import vincent from "../images/Vincent_Portrait.webp";

function Portrait() {
  return (
    <div className="img-wrapper">
      <img
        src={vincent}
        alt="Cloud Strife Portrait"
        width={"auto"}
        height={170}
      />
    </div>
  );
}

export default Portrait;
