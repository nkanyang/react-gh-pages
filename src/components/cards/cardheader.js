import React from "react";
import "./style.css";

function SocialLink({linkname,href}){
  return(
    <a className={`fa fa-${linkname}`} href={href}></a>
  );
}

function CardTitle({title}){
  return(
    <div className="card-title-title">{title}</div>
  );
}

function Avatar({src,alt}){
  return(
    <img className="card-photo" src={src} alt={alt}></img>
  );
}

function CardName({name}){
  return(
    <div className="card-title-name">
      {name}
    </div>
  );
}

function CardHeader(){
  return(
    <div className="card-head">
      <Avatar src="https://hades217.github.io/images/photo.png" alt="selfie" />
      <div className="card-title">
        <CardName name="John Doe"/>
        <CardTitle title="frontend-developer"/>
        <div className="card-title-links">
            <SocialLink linkname="twitter" href=""/>
            <SocialLink linkname="facebook" href=""/>
            <SocialLink linkname="instagram" href=""/>
          </div>
      </div>
    </div>
  );
}

export default CardHeader;