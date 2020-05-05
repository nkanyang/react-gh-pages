import React from "react";

function ServiceLogo({logo}){
  return(
    <div className="service__logo">
      <img width="80px" src={logo}></img>
    </div>
  );
}

export default ServiceLogo;