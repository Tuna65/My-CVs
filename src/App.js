import './App.css';
import './Grid/grid.css';
import Header from './Components/header/Header';
import Info from './Components/Info/Info';
import Skill from './Components/Skill/Skill';
import Portlofio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { useContext } from 'react';
import { ThemeContext } from './Context';
import TapToTop from './Components/TabToTop/TapToTop';

function App() {
    const theme = useContext(ThemeContext);

    const darkMode = theme.state.darkMode;
    return (
        <div className="App" style={{ backgroundColor: darkMode ? 'black' : '', color: darkMode ? 'white' : '' }}>
            <div className="container">
                <Header />
                <Info />
                <Skill />
                <Portlofio />
                <Contact />
            </div>
            <TapToTop />
            <Footer />
        </div>
    );
}

export default App;
