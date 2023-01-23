import {React, useEffect,useState} from 'react'
import { NavLink } from 'react-router-dom';
import "../components/style/style.css";
import { BsFillCartFill } from "react-icons/bs";
import {AiOutlineHome,AiOutlineInfoCircle,AiFillContacts} from "react-icons/ai";
import $ from "jquery";
import {RiCloseFill} from "react-icons/ri"
import {GiHamburgerMenu} from "react-icons/gi";
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const data = useSelector((state) => state.CartReducer.carts);
  const navigate = useNavigate();
  const handleClick = () => {
    setIsActive(!isActive);
  }
 


  $(function(){
    let anchor=$("#cart_bar");
    anchor.on("click",function(){
      let cart_lenght=$("#cart_lenght").text();
      if(cart_lenght==0){
       
    anchor.attr("href","/")
   
            toast.warn("Add Some roduct ", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
      }
      
    })
  })
  {
    $(window).scroll(function () {
      var scrolling = $(window).scrollTop();
      if (scrolling === 0) {

        $("#header-sticky").removeClass("trans_sticky");
        $("#header-sticky").removeClass("sticky");

      }
      if (scrolling >= 60) {

        $("#header-sticky").addClass("trans_sticky");
        $("#header-sticky").removeClass("sticky");

      }
      if (scrolling >= 120) {
        $("#header-sticky").removeClass("trans_sticky");
        $("#header-sticky").addClass("sticky");
      }

    }); //missing );

 
    // const empty = () => {
    //   if (data.length === 0) {
    //     toast.warn("Add Some roduct ", {
    //       position: "top-center",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light",
    //     });
 
    //     navigate("/")
    //   }
    // }

  }
  return (
    <div>
      <header classname="header_sec">
      <ToastContainer />
        <nav className="navbar navbar-expand-lg " id='header-sticky'>
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src={require("../components/imges/amt-logo-3.png")} alt="" className='logo_img' />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <NavLink class="nav-link active" to="/">Home</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/about">about</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/contact">Contact</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" id='cart_bar' to="/card_details">



                    <div type="button" class="cart_routing">
                      <div className="cart_icon">
                        <BsFillCartFill />
                      </div>

                      <span class="badge_icon">
                        <div className="text-center" id='cart_lenght'>
                          {data.length}

                        </div>
                      </span>
                    </div>
                  </NavLink>
                </li>

              </ul>
            </div>
          </div>
        </nav>

     <div className={`mobile_header ${isActive ? 'active' : ''}`} id='mobile_header'>
     <div className="mobile_header">
          <div className="box_mobile_box">
            <div className="top_bar_header">
              <div className="brand_logo">
               <a href="/">
               <img src={require("../components/imges/amt-logo-1.png")} alt="" className='img-fluid '/>
               </a>
              </div>
              <div className="open_bootm_header addevent " id='top_class' onClick={handleClick}>
                <div className="icon">
                  <GiHamburgerMenu/>
                </div>
              </div>
            </div>

            <div className="bottom_header mobile_nav">
              <div className="box_bottom_box">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <NavLink class="nav-link active" to="/"> <div className="icon">
                    <AiOutlineHome/>
                  </div><span>
                  Home
                  </span></NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/about">
                  <div className="icon">
                    <AiOutlineInfoCircle/>
                  </div>
                  <span>about</span>
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/contact">
                  <div className="icon">
                    <AiFillContacts/>
                  </div>
                  <span>
                  contact
                  </span>
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" id='cart_bar' to="/card_details">



                    <div type="button" class="cart_routing">
                      <div className="cart_icon">
                        <BsFillCartFill />
                      </div>

                      <span class="badge_icon">
                        <div className="text-center" id='cart_lenght'>
                          {data.length}

                        </div>
                      </span>
                    </div>
                  </NavLink>
                </li>

              </ul>
                <div className="left addevent " id='bottom_close'  onClick={handleClick}>
                <div className="icon">
                <RiCloseFill/>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     </div>
      </header>

    </div>
  )
}

export default Header;