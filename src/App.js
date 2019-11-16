import React from 'react';
import logo from './logo.svg';
import './App.css';
// import MainContainer from './MainContainer';
import Nav from './Nav';
import ExperienceCardHolder from './ExperienceCardHolder';
import QuickCategoryCardHolder from './QuickCategoryCardHolder';
import FullWidthCTA from './FullWidthCTA';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="App-body">
      <QuickCategoryCardHolder/>
      <ExperienceCardHolder/>
      <FullWidthCTA/>
      </div>
    </div>
  );
}


export default App;
