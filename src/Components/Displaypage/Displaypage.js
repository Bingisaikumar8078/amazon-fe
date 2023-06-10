import React from "react";
import RightSidePanel from "./RightSidePanel/RightSidePanel";
import { useParams } from "react-router-dom";

function Displaypage() {
  const {type} = useParams();
  console.log(type);
  return (
    <div style={{ display: "flex" }}>
      <div>
        <RightSidePanel type= {type} />
      </div>
    </div>
  );
}

export default Displaypage;
