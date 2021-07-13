import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import FeaturesPage from './FeaturesPage';
import Contact from './Contact';

function MainContent() {
  return (
    <div className="content">
      <Route exact path="/">
        <HomePage/>
      </Route>
      <Route path="/features">
        <FeaturesPage/>
      </Route>
      <Route path="/contact">
        <Contact/>
      </Route>
    </div>
  );
}

export default MainContent;