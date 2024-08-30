import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import About from '../src/Components/Pages/About/App'
import Expertise from '../src/Components/Pages/Expertise'
import Projects from '../src/Components/Pages/Projects'
import Culture from '../src/Components/Pages/Culture'
import Perspectives from '../src/Components/Pages/Perspectives'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage/App'
// import PulseAnimation from './Components/pulseAnimation';
function App() {
  return (
     
    <Router>
    <div className='flex flex-col min-h-screen '>  
    <Navbar/>     
    <div>  
    <Routes>   
      <Route path='/' element={<HomePage/>}/>
      <Route path="/about" element={<About/>} />
      <Route path="/expertise" element={<Expertise />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/culture" element={<Culture />} />
      <Route path="/perspectives" element={<Perspectives />} />       
    </Routes>
    </div>
    <Footer/>   
    </div>
    </Router>
    
  );
}

export default App;
