import React from "react";
import "./style.css"

function BlockTitle({first,second}){
  return (
      <h3 class="block__title">{first} <span>{second}</span></h3>
  );
}

export default BlockTitle;