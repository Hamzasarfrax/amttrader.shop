import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import "./components/style/style.css";
import "./components/style/responsive.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from './components/routing/Home';
import About from './components/routing/About';
import Contact from './components/routing/Contact';
import Header from './components/Header';
import Cart from './components/routing/Cart';
import Terms from './components/routing/Terms';
import Page404 from './components/routing/Page404';
import HashLoader from "react-spinners/HashLoader"
import Checkout from './components/routing/Checkout';
import Dashbord from './components/admin_area/Dashbord';
import Sidebar from './components/admin_area/Sidebar';
import Admin_area from './components/admin_area/Admin_area';
import SideFoter from './components/admin_area/SideFoter';
import UserForm from './components/admin_area/UserForm';
import ProductDetail from './components/admin_area/ProductDetail';

const App = () => {
  const [loading, setloading] = useState(true);
  const [auth, setauth] = useState(false);
  // let navigate=useNavigate();

  useEffect(() => {
    // localStorage.setItem("user","auth")
    // if(auth === true){
    //   navigate('/dashboard')
    // }
    // else{
    //   navigate('/')
    // }
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
       
{
  auth ? (<><Sidebar/></>):(<>
<Header/></>)
}


<main>

          <div className="wrapper">
            <Routes>
              {
                auth ? (<>

                  

                  <Route exact path="/dashboard" element={<Dashbord />} />
                 
                  <Route exact path="/userdetails" element={<UserForm />} />
                  <Route exact path="/productdetail" element={<ProductDetail/>} />
                </>) : (<>
                
                 
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/card_details" element={<Cart />} />
                    <Route exact path="/terms" element={<Terms />} />
                    <Route exact path="/:param1" element={<Page404 />} />
                    <Route exact path="/checkout/:id" element={<Checkout />} />
                
                
                </>)
              }


            </Routes>

          </div>
</main>
{
  auth ? <SideFoter/>:<Footer/>
}
        </BrowserRouter>)
      }


    </div>
  )
}

export default App;