import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path = '/login' element = { <Login /> } />
        <Route path = '/' element = { <Home /> } exact />
        <Route path = '/about' element = { <About /> } />
        <Route path = '/products' element = { <Products /> } />
        <Route path = '/services' element = { <Services /> } />
        <Route path = '/contact' element = { <Contact /> } />
        <Route path = '*' element = { <NotFound /> } />
        <Route path = '/signup' element = { <Signup/> } />
      </Routes>
    </Router>
  );
}

export default App;
