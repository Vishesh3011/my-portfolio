import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Education from './components/Educations';
import Interests from './components/Interests';

function App() {
  return (
    <div className="App">
      <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        {/* <Services/> */}
        {/* <Testimonials/> */}
        <Portfolio/>
        <Education/>
        <Interests/>
        <Contact/>
        <Footer/>
      </>
    </div>
  );
}

export default App;
