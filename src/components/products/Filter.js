import { React, useState, useEffect } from 'react';
import "../style/home.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FaFilter } from "react-icons/fa"
import "../style/card.css";

import { useDispatch } from 'react-redux';


import Json from "../products/Json";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ADD } from '../Redux/Actions/Action';

const Filter = () => {
  const [data, setdata] = useState(Json);
  const [first, setfirst] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const [search, setsearch] = useState('');
  const dispatch = useDispatch();
  const filterByCategory = (category) => {
    let categ=data.filter(item => item.category === category);
   
    setdata(categ);
  }
  const send = (x, y) => {
    dispatch(ADD(x))
    let cart_btn = document.getElementById(`add_cart${y}`);
    cart_btn.innerHTML = `
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    Loading...
  `

    setTimeout(() => {
      cart_btn.innerHTML = "Your Product is Added";
      toast.success('Sucesfully Added', {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }, 1000)


  }
  const filter = (x) => {
    const filters = data.filter((item) => item.category === x);
    if (filters.length === 0) {
      setfirst(data);
    } else {
      setfirst(filters)
    }
  }

  const filterall = () => {
    setdata(Json)
  }
  useEffect(() => {

  }, []);
  return (
    <div>
      <ToastContainer />
      <div className="card_wrap mt-5">
        <div className="row">
          <div className="col-sm-2">

            <div className="">
              <div class="dropdown">
                <button class="btn btn_main dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  filter by category <FaFilter />
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" onClick={() => filterall()}>
                    All</a></li>
                  {
                    data.map((item, index) => {
                      return (
                        <>



                          <li key={item.id}><a class="dropdown-item"  onClick={() => filterByCategory(item.category)}> {item.category}</a></li>


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
                <input type="text" onChange={(e) => setsearch(e.target.value)} class="form-control" id="filter_category" placeholder="Search Product" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button class="btn btn_main" type="button" id="button-addon2">search <AiOutlineSearch /></button>
              </div>
           
            </div>
          </div>
        </div>
      </div>

      <div className="container">
      <div className="row">
                {data.filter((item) => {
                  if (search === '') {
                    return item
                  }
                  else if (item.title.includes(search.toLowerCase())) {
                    return item
                  }
                }).map((item, index) => {
                  return (
                    <>
           


                        

                      
                          <div className="col-sm-4" key={index}>
                            <div className="add_to_cart">
                              <div className="card_box_main">
                                <div className="main_top_card">
                                  <div className="discoutn_action">
                                    <span>discount 40%</span>
                                  </div>
                                  <div className="img">
                                    <img src={item.image} alt="cart-img" className='img-fluid rounded' />
                                  </div>
                                </div>

                                <div className="card_body">
                                  <div className="cart_title">
                                    {item.title}
                                  </div>
                                  <div className="cart_desc">
                                    {
                                      item.description
                                    }
                                  </div>
                                  <div className="carts_animate">
                                    <div className="cart_price">
                                      <span className='rupee'>pkr</span>
                                      <span>{item.price}</span>
                                    </div>
                                    <button className='btn btn_cart btn_main' id={`add_cart${item.id}`} onClick={() => send(item, item.id)}>add to cart
                                    </button>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>



                  
                
                    </>
                  )
                })
                }
                This way, even if the title of the item doesn't match the search term exactly, it will still be displayed if it includes the search term.




                </div>
              </div>

    </div>
  )
}

export default Filter
