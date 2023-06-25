import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineDashboard, AiOutlineLogout, AiFillSetting,AiOutlineDoubleLeft } from "react-icons/ai";
import {BiCommentDetail} from "react-icons/bi";
import {BsFillCartCheckFill} from "react-icons/bs"
import $ from "jquery";
function handlesidebar(){
let sidebar_active=$("#sidebar");
sidebar_active.toggleClass("active")
$(".wrapper_content").toggleClass("active")

}
const Sidebar = () => {
  return (
    <div>
      <aside>
        <header>
          <nav className='navbar'>
            <div className="brand_logo">
              <a href="/dashboard">
                <img src={require("../i")} alt="brand" className='img-fluid' />
              </a>
            </div>
            <ul className='navul'>


              <li>
                <NavLink className="nav-item" to="">
                  <div className="box_of_dashbord">
                    <div className="icons">

                      <AiFillSetting />
                    </div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-item" to="">
                  <div className="box_of_dashbord">
                    <div className="icons">

                      <AiOutlineLogout />
                    </div>
                  </div>
                </NavLink>
              </li>



            </ul>
          </nav>
        </header>
        <div className="sidebar" id='sidebar'>
<div className="in_and-out" id='sidebar_active' onClick={handlesidebar}>
  <div className="icon">
    <AiOutlineDoubleLeft/>
  </div>
</div>
          <div className="box_userdetail">
            <div className="avtar">
              <div className="img">
                <img src="https://dummyimage.com/50x50/000/fff&text=Avtar" className='img-fluid rounded-circle' alt="" />
              </div>
              user area
            </div>

          </div>
          <ul className='nav navbar_pills'>
            <li className='list-item'>
              <NavLink to="/dashboard"> <div className="menu-side">
                <div className="icons">
                  <AiOutlineDashboard />
                </div>
                <div className="name">
                  dashboard
                </div>
              </div></NavLink>


            </li>
            <li className='list-item'>
              <NavLink to="/userdetails"> <div className="menu-side">
                <div className="icons">
                  <BiCommentDetail />
                </div>
                <div className="name">
                user details
                </div>
              </div></NavLink>


            </li>


            <li className='list-item'>
              <NavLink to="productdetail"> <div className="menu-side">
                <div className="icons">
                  <BsFillCartCheckFill />
                </div>
                <div className="name">
                product details
                </div>

              </div></NavLink>


            </li>


            <li className='list-item'>
              <NavLink to="/dashbord/admin_area"> <div className="menu-side">
                <div className="icons">
                  <AiOutlineDashboard />
                </div>
                <div className="name">
                  admin-area
                </div>
              </div></NavLink>


            </li>


       
          </ul>


        </div>

      </aside>
    </div>
  )
}

export default Sidebar;
