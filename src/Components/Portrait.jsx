import React from "react";
import vincent from "../images/Vincent_Portrait.webp"

function Portrait() {
  return (
    // <div>Portrait</div>
    <img
      // src={cloud}
      src={vincent}
      alt="Cloud Strife Portrait"
      width={"auto"}
      height={170}
    />
  );
}

export default Portrait;
