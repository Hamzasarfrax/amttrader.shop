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
<Main_slider/>
<div className="container">


<div className="">

 <Filter/>
</div>
<div className="product_cart">
  <Card/>
</div>

 
</div>

</div>


    </div>
  )
}

export default Home;