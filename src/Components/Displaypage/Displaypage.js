import React from "react";
import LeftSidePanel from "./LeftSidePanel/LeftSidePanel";
import RightSidePanel from "./RightSidePanel/RightSidePanel";

function Displaypage() {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <LeftSidePanel />
      </div>
      <div>
        <RightSidePanel />
      </div>
    </div>
  );
}

export default Displaypage;
