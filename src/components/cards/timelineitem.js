import React from "react";
import "./style.css"

function TimelineItem({title,period,organization,description}){
  return(
    <div className="timeline__item">
      <h4>{title}</h4>
      <span className="item__period">{period}</span>
      <span className="item__org">{organization}</span>
      <p>{description}</p>
    </div>
  );
}

export default TimelineItem;