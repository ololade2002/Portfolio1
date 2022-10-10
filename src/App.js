
import './App.css';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Hero from './Component/Hero/Hero';
import Newsletter from './Component/Newsletter/Newsletter';
import Project from './Component/Project/Project';
import Skills from './Component/Skills/Skills';


function App() {

  return (
 
    <div className="App" >
   <Hero/>
   <Skills/>
   <Project/>
    <Contact/>
    <Newsletter/>
    <Footer/>
    </div>
    
  );
}

export default App;
