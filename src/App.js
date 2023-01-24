import React, { useState, useEffect } from 'react';
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
import Page404 from './components/routing/Page404';
import HashLoader from "react-spinners/HashLoader"
import Checkout from './components/routing/Checkout';

const App = () => {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 2000)
  }, []);
  return (
    <div>



      {
        loading ? (<div className="spinner_wait" id='spinner_wait'>
          <HashLoader
            color="#ef082f"
            size={86}

          />

        </div>) : (<BrowserRouter>
          <Header />

          <main>

            <div className="wrapper">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/card_details" element={<Cart />} />
                <Route exact path="/terms" element={<Terms />} />
                <Route exact path="/:param1" element={<Page404 />} />
                <Route exact path="/checkout/:id" element={<Checkout/>} />

              </Routes>
            </div>
          </main>
          <Footer />
        </BrowserRouter>)
      }


    </div>
  )
}

export default App;