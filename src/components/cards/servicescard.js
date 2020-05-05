import React from "react";
import "./style.css";
import ShortHeader from "./shortheader";
import BlockTitle from "./blocktitle";
import ServiceItem from "./serviceitem";
import ServiceLogo from "./servicelogo";

function ServicesCard(){
  return(
    <div className="info-card">
      <ShortHeader>Services</ShortHeader>
      <div className="card__content">
        <div className="content__row--left">
          <BlockTitle first="My " second="Service"/>
        </div>
        <div className="content__row">
          <ServiceItem 
          src="https://hades217.github.io/images/service/web_design_icon.png"
          title="Web Design"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor."
          />
          <ServiceItem 
          src="https://hades217.github.io/images/service/photography_icon.png"
          title="Photography"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor."
          />
          <ServiceItem 
          src="https://hades217.github.io/images/service/creativity_icon.png"
          title="Management"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor."
          />
          <ServiceItem 
          src="https://hades217.github.io/images/service/advertising_icon.png"
          title="Advertising"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor."
          />
        </div>
        <div className="content__row--left">
          <BlockTitle first="Clients"/>
        </div>
        <div className="content__row">
          <ServiceLogo logo="https://hades217.github.io/images/clients/client_1.png"/>
          <ServiceLogo logo="https://hades217.github.io/images/clients/client_1.png"/>
          <ServiceLogo logo="https://hades217.github.io/images/clients/client_1.png"/>
          <ServiceLogo logo="https://hades217.github.io/images/clients/client_1.png"/>
          <ServiceLogo logo="https://hades217.github.io/images/clients/client_1.png"/>
          <ServiceLogo logo="https://hades217.github.io/images/clients/client_1.png"/>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;