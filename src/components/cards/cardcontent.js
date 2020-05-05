import React from "react"
import "./style.css"

function AboutMe(){
  return (
    <div class="about-me">
      <h3 class="block-title">About <span>Me</span></h3>
      <p class="block-text">Hello! I am John Doe. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique accusamus omnis temporibus dolorum impedit libero fugiat nemo ratione hic sequi! Nobis ut ullam necessitatibus nam eaque quas praesentium quaerat nulla.</p>
    </div>
  );
}

function ContactMe(){
  return (
    <div class="contact-info">
      <table class="info-table">
        <tr><th>Age</th><td>29</td></tr>
        <tr><th>Residence</th><td>Australia</td></tr>
        <tr><th>Address</th><td>Level 3/57 Coranation Dr.</td></tr>
        <tr><th>E-mail</th><td> <a href="">xxx@gmaul.com</a></td></tr>
        <tr><th>Phone</th><td>+01234578797</td></tr>
      </table>
    </div>
  );
}
function CardContent(){
  return(
    <div className="card-content">
      <AboutMe />
      <ContactMe />
    </div>
  );
}

export default CardContent;