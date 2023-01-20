import {React,useState,useEffect} from 'react';
import "../style/home.css";
import {AiOutlineSearch} from "react-icons/ai";
import {FaFilter} from "react-icons/fa"

import Json from "../products/Json";
const Filter = () => {
    const [data, setdata] = useState(Json);
    const [first, setfirst] = useState({});
  
 const [search, setsearch] = useState('');
    console.log(search)
   const filter=(x)=>{
    const filters=data.filter((item)=>item.category ===x);
    if(filters.length === 0) {
        setfirst(data);
    } else {
        setfirst(filters)
    }
}

      const filterall=()=>{
       
      }
      useEffect(() => {
        
      }, []);
  return (
    <div>
<div className="card_wrap mt-5">
<div className="row">
  <div className="col-sm-2">
 
  <div className="">
  <div class="dropdown">
  <button class="btn btn_main dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    filter by category <FaFilter/>
  </button>
  <ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#" onClick={()=>filterall()}> 
      All</a></li>
  {
  data.map((item,index)=>{
    return(
      <>
      
       
     
  <li key={item.id}><a class="dropdown-item" href="#" onClick={()=>filter(item.category)}> {item.category}</a></li>


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
  <input type="text" onChange={(e)=>setsearch(e.target.value)} class="form-control"  id="filter_category" placeholder="Search Product" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button class="btn btn_main" type="button" id="button-addon2">search <AiOutlineSearch/></button>
</div>
<div className="">
        data.filter((item)=>{
        if(search === ''){
            console.log("empty")
        }
        else if(item.title.includes(search)){
            return item
        }
    }).map((item,index)=>{
        return (
            <>
                <div key={index}>
                    {item.id}
                    {item.title}
                </div>
            </>
        )
    })
}
This way, even if the title of the item doesn't match the search term exactly, it will still be displayed if it includes the search term.





</div>
</div>
  </div>
</div>
</div>



    </div>
  )
}

export default Filter
