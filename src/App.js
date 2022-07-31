import Navbar from "./components/navbar/Navbar";
import './App.css'
import Intro from "./components/Intro/Intro";
import Services from './components/Services/Services'
import Work from "./components/Work/Work";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <Services/>

    <Work/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
