import About from "./components/About";
import Diplom from "./components/Diplom";
import FAQ from "./components/FAQ";
import Goals from "./components/Goals";
import Header from "./components/Header";
import Plan from "./components/Plan";
import Registration from "./components/Registration";

function App() {
    return (
        <div className="app">
            <Header />
            <About />
            <Goals />
            <Plan />
            <Diplom />
            <Registration />
            <FAQ />
        </div>
    );
}

export default App;
