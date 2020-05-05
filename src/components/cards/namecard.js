import React from "react";
import "./style.css"
import CardHeader from "./cardheader"
import CardContent from "./cardcontent"

function NameCard(){
  return (
    <div className="info-card">
     <CardHeader />
     <CardContent />
    </div>
  );
}

export default NameCard;