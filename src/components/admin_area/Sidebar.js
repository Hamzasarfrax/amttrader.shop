import React from 'react'
import { NavLink } from 'react-router-dom'
import {AiOutlineDashboard} from "react-icons/ai"
const Sidebar = () => {
  return (
    <div>
<aside>
<div className="sidebar" id='sidebar'>

<ul className='nav navbar_pills'>
<li className='list-item'>
<NavLink to="/dashbord/admin_area"> <div className="menu-side">
  <div className="name">
    admin-area
  </div>
  <div className="icons">
    <AiOutlineDashboard/>
  </div>
</div></NavLink>


</li>
<li className='list-item'>
<NavLink to="/dashbord/admin_area"> <div className="menu-side">
  <div className="name">
    admin-area
  </div>
  <div className="icons">
    <AiOutlineDashboard/>
  </div>
</div></NavLink>


</li>


<li className='list-item'>
<NavLink to="/dashbord/admin_area"> <div className="menu-side">
  <div className="name">
    admin-area
  </div>
  <div className="icons">
    <AiOutlineDashboard/>
  </div>
</div></NavLink>


</li>


<li className='list-item'>
<NavLink to="/dashbord/admin_area"> <div className="menu-side">
  <div className="name">
    admin-area
  </div>
  <div className="icons">
    <AiOutlineDashboard/>
  </div>
</div></NavLink>


</li>


<li className='list-item'>
<NavLink to="/dashbord/admin_area"> <div className="menu-side">
  <div className="name">
    admin-area
  </div>
  <div className="icons">
    <AiOutlineDashboard/>
  </div>
</div></NavLink>


</li>
</ul>

  
</div>

</aside>
    </div>
  )
}

export default Sidebar
