import React from 'react';
import './App.css';
import Header from "./components/header";
import {NameCard, ResumeCard, ServicesCard, ContactCard, BlogCard} from "./components/cards";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />  
        <Switch>
          <Route path="/react-gh-pages/" exact component={NameCard}></Route>
          <Route path="/react-gh-pages/resume" component={ResumeCard}></Route>
          <Route path="/react-gh-pages/services" component={ServicesCard}></Route>
          <Route path="/react-gh-pages/blog" component={BlogCard}></Route>
          <Route path="/react-gh-pages/contactme" component={ContactCard}></Route>
        </Switch>
        <footer class="page-footer">@copy2020.by <span>Jessie</span></footer>
      </div>
    </Router>
  );
}
export default App;