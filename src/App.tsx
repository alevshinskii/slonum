import React from 'react';
import About from './components/About';
import Goals from './components/Goals';
import Header from './components/Header';
import Plan from './components/Plan';


function App() {
  return (
    <div className="app">
      <Header/>
      <About/>
      <Goals/>
      <Plan/>
      
    </div>
  );
}

export default App;
