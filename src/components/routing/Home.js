import {React,useState} from 'react'
import "../style/home.css";
import Card from '../products/Card';
import Main_slider from '../slider/Main_slider';

import Json from "../products/Json";
import Filter from '../products/Filter';
const Home = () => {
 
  const [data, setdata] = useState(Json);



  return (
    <div>
<div className="home_pages_section">
<div className="slider_main">
  <Main_slider/>

<div className="container">
<div className="all_main_text">
   <div className="heading">
    our moto
   </div>
   <div className="para">
    we are working on trust
   </div>
  </div>
</div>
</div>
<div className="container">


<div className="product_cart">

 <Filter/>
</div>


 
</div>

</div>


    </div>
  )
}

export default Home;