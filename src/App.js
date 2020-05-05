import React from 'react';
import './App.css';
import Header from "./components/header";
import {NameCard, ResumeCard, ServicesCard, ContactCard, BlogCard} from "./components/cards";

function App() {
  return (
    <div className="container">
      <Header />  
      <NameCard /><br/>
      <ResumeCard /><br/>
      <ServicesCard /><br/>
      <BlogCard /><br/>
      <ContactCard /><br/>
      <footer class="page-footer">@copy2020.by <span>Jessie</span></footer>
    </div>
  );
}
export default App;
