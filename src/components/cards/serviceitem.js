import React from "react";
import "./style.css"

function ServiceItem({src,title,description}){
  return(
    <div className="service__item">
      <div className="service__image">
        <img height="64px" src={src}></img>
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default ServiceItem;