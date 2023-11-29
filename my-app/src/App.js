import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Nav from './Nav.js';
import Footer from './Footer.js';
import Home from './Home.js';
import Menu from './Menu.js';
import Reserve from './Reserve.js';
import Contact from './Contact.js';
import About from './About.js';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
  <div> 
    <Header />
    <Nav></Nav> 
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/menu" element = {<Menu />}/>
      <Route path="/about" element = {<About />}/>
      <Route path="/Reserve" element = {<Reserve />}/>
      <Route path="/contact" element = {<Contact />}/>
      </Routes> 
    <Footer></Footer>
    
  </div>
  );
}

export default App;
