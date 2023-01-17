import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import "./components/style/style.css";
import "./components/style/responsive.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/routing/Home';
import About from './components/routing/About';
import Contact from './components/routing/Contact';
import Header from './components/Header';
import Cart from './components/routing/Cart';

const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Header />
      <div className="wrapper">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/card" element={<Cart/>} />

        </Routes>
        </div>

        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App;