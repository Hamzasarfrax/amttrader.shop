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
 



  {
    $(window).scroll(function () {
      var scrolling = $(window).scrollTop();
      if (scrolling === 0) {
        $("#header-sticky").addClass("fixed");
        $("#header-sticky").removeClass("trans_sticky");
        $("#header-sticky").removeClass("sticky");

      }
      if (scrolling >= 60) {
        $("#header-sticky").removeClass("fixed");
        $("#header-sticky").addClass("trans_sticky");
        $("#header-sticky").removeClass("sticky");

      }
      if (scrolling >= 120) {
        $("#header-sticky").removeClass("fixed");
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
   
   <header>
   
   </header>

    </div>
  )
}

export default Header;