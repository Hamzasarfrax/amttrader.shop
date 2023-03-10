import React from 'react'
import {BsInstagram,BsFacebook,BsTwitter} from "react-icons/bs";
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
  <footer id='noauth'>
  <div className="container">
      <div className="row">
         <div className="col-sm-4">
            <div className="footer_headings_main">
                <span className='amt'>amt</span> <span className='trader'>traders</span>
            </div>
            <div className="other_details_about_brand">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, fuga?
             
            </div>
         </div>
         <div className="col-sm-4">
            <div className="footer_headings_main">
               category's
            </div>
            <div className="category_details">
            <ul>
                  <li>
                     <NavLink to='/'>home </NavLink>
                  </li>
                  <li>
                     <NavLink to='/about'>about us </NavLink>
                  </li>
                  <li>
                     <NavLink to='/contact'>contact us </NavLink>
                  </li>
                  <li>
                     <NavLink to='/terms'>terms and condition </NavLink>
                  </li>
                 
               </ul>
            </div>
         </div>

         <div className="col-sm-4">
            <div className="footer_headings_main">
            ABOUT US
            </div>
            <div className="other_details_about_brand">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, fuga?
            </div>
            <div className="socials_div">
              <ul>
               <li><a href="#">
                  <div className="icons">
                     <BsFacebook/>
                  </div>
               </a></li>
               <li><a href="#">
               <div className="icons">
                     <BsInstagram/>
                  </div>
               </a></li>
               <li><a href="#">
               <div className="icons">
                     <BsTwitter/>
                  </div>
               </a></li>
               <li><a href="#"></a></li>
              </ul> 
            </div>
         </div>
      </div>
    </div>
  </footer>
    
    </div>
  )
}

export default Footer