import About from "./components/blocks/About";
import Diplom from "./components/blocks/Diplom";
import FAQ from "./components/blocks/FAQ";
import Footer from "./components/blocks/Footer";
import Goals from "./components/blocks/Goals";
import Header from "./components/blocks/Header";
import Plan from "./components/blocks/Plan";
import Registration from "./components/blocks/Registration";
import Subscribe from "./components/blocks/Subscribe";

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
            <Subscribe />
            <Footer />
        </div>
    );
}

export default App;
