import React from "react";
import { FallingLines } from "react-loader-spinner";

function MainLoader() {
  return (
    <div align="center" className="loader_main">
      <FallingLines
        type="Plane"
        style={{ display: "flex", backgroundColor: "#000" }}
        color="#fff"
        height={100}
        width={100}
        timeout={20000}
      />
    </div>
  );
}

export default MainLoader;
