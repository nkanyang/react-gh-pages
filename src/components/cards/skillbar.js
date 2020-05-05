import React from "react";

function SkillBar({name,percent}){
  return(
    <div className="skillbar__container">
      <h4>{name}</h4>
      <div className="skillbar__border">
        <div className="skillbar__percent" style ={{width:percent}}></div>
      </div>
    </div>
  );
}

export default SkillBar;