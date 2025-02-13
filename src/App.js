import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { HelmetProvider } from 'react-helmet-async';
import About from '../src/Components/Pages/About/App'
import Expertise from '../src/Components/Pages/Expertise'
import Projects from '../src/Components/Pages/Projects/App'
import Culture from '../src/Components/Pages/Culture/App'
import Perspectives from '../src/Components/Pages/Perspectives/App'
import Footer from './Components/Layout/Footer';
import Navbar from './Components/Layout/Navbar';
import HomePage from './Components/Pages/HomePage/App'

function App() {
  return (
    <HelmetProvider>
    <Router>
    <div className='flex flex-col min-h-screen '>  
    <Navbar/>     
    <div>  
    <Routes>   
      <Route path='/' element={<HomePage />}/>
      <Route path="/about" element={<About />} />
      <Route path="/expertise" element={<Expertise />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/culture" element={<Culture />} />
      <Route path="/perspectives/*" element={<Perspectives />} />       
    </Routes>
    </div>
    <Footer/>
    </div>
    </Router>
    </HelmetProvider>
  );
}

export default App;
