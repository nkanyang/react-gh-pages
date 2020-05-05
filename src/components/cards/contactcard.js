import React from "react";
import "./style.css";
import ShortHeader from "./shortheader";
import BlockTitle from "./blocktitle";

 function ContactForm(){
  return(
    <div className="contactform__container">
      <form id="contactform" className="contactform__form">
        <div className="contactform_control">
          <i className="fa fa-user"></i>
          <label for="fullname">Full Name</label>
          <input id="fullname" type="text"></input>
          <div className="control__border"></div>
        </div>
        <div className="contactform_control">
          <i className="fa fa-envelope"></i>
          <label for="email">Email Address</label>
          <input id="email" type="email"></input>
          <div className="control__border"></div>
        </div>
        <div className="contactform_control">
          <i className="fa fa-comment"></i>
          <label for="message">Message for Me</label>
          <textarea id="message" rows="4" required="required" data-error="Please leave me a message."></textarea>
          <div className="control__border"></div>
        </div>  
        <div class="g-recaptcha" data-sitekey="your_site_key"></div>
        <input type="submit" className="contactform__submitbtn" value="SUBMIT"></input>
      </form>
    </div>
  );

}

function ContactInfoItem({icon,text}){
  return (
    <div className="contactinfo__block">
      <div className="ci-icon">
        <i className={icon}></i>
      </div>
      <div className="ci-text">
        <h5>{text}</h5>
      </div>
    </div>
  );
}

function ContactCard(){
  return(
    <div className="info-card">
      <ShortHeader>Contact</ShortHeader>
      <div className="card__content">
        <div className="content__row">
          <div className="content__column">
            <BlockTitle first="Get in " second="Touch"/>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.225341425802!2d145.18087081509398!3d-37.85501747974488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad63ee20bfd975f%3A0xf0456760532d3a0!2sVermont%20South%20Shopping%20Centre!5e0!3m2!1sen!2sau!4v1588569802608!5m2!1sen!2sau" 
              width="451" 
              height="200" 
              frameborder="0" 
              style={{border:0}} 
              allowfullscreen="" 
              aria-hidden="false" 
              tabindex="0">
            </iframe>
            <ContactInfoItem icon="fa fa-map-marker" text="Melborne,Australia"/>
            <ContactInfoItem icon="fa fa-phone" text="+61 123 45678"/>
            <ContactInfoItem icon="fa fa-envelope" text="Melborne,Australia"/>
            <ContactInfoItem icon="fa fa-check" text="Melborne,Australia"/>
          </div>
          <div className="content__column">
            <BlockTitle first="Contact" second="Form"/>  
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;