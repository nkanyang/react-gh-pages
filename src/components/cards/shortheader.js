import React from "react";

function ShortHeader({children}){
  return(
    <div className="Card__header--short">
      <div className="card__caption">{children}</div>
    </div>
  );
}

export default ShortHeader;