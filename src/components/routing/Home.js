import {React,useState} from 'react'
import "../style/home.css";
import Card from '../products/Card';
import Main_slider from '../slider/Main_slider';
import {AiOutlineSearch} from "react-icons/ai";
import {FaFilter} from "react-icons/fa"
import { useSelector } from 'react-redux';
import Json from "../products/Json";
const Home = () => {
 
  const [data, setdata] = useState(Json);
  const [find, setfind] = useState();
  console.log(find)
  const filter=(x)=>{
    const filters=data.filter((item)=>item.category ===x)
    setfind(filters)
  }
  return (
    <div>
<div className="home_pages_section">
<Main_slider/>
<div className="container">
{
  find.map((item)=>{
    return(
      <>
        <h1>{item.id}</h1>
        <h1>{item.category}</h1>
      </>
    )
  })
}
<div className="card_wrap mt-5">
<div className="row">
  <div className="col-sm-2">
 
  <div className="">
  <div class="dropdown">
  <button class="btn btn_main dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    filter by category <FaFilter/>
  </button>
  <ul class="dropdown-menu">
  {
  data.map((item)=>{
    return(
      <>
      
       
  
  <li><a class="dropdown-item" href="#" onClick={()=>filter(item.category)}> {item.category}</a></li>


      </>
    )
  })
}
</ul>
</div>
</div>
  </div>
  <div className="col-sm-10">
<div className="search_filter">
<div class="input-group ">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button class="btn btn_main" type="button" id="button-addon2">search <AiOutlineSearch/></button>
</div>
</div>
  </div>
</div>
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