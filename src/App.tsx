import About from './components/About';
import Diplom from './components/Diplom';
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
      <Diplom/>
    </div>
  );
}

export default App;
