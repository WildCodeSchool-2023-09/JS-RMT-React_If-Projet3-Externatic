import React from "react";
import "./Consultant.css";

function Consultant({ consultant }) {
  return (
    <div>
      <div className="consultantImage">
        <img
          className="logoImage"
          src={consultant.image_url}
          alt={consultant.name}
        />
      </div>
    </div>
  );
}

export default Consultant;
