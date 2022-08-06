import React from 'react';
import About from './components/About';
import Goals from './components/Goals';
import Header from './components/Header';


function App() {
  return (
    <div className="app">
      <Header/>
      <About/>
      <Goals/>
    </div>
  );
}

export default App;
