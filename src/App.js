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
import Terms from './components/routing/Terms';

const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Header />
        <main>
      <div className="wrapper">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/card_details" element={<Cart/>} />
          <Route exact path="/terms" element={<Terms/>} />

        </Routes>
        </div>
</main>
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App;