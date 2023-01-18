import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { DLT,REMOVE,ADD_ONE, ADD } from '../Redux/Actions/Action';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import "../style/cart-detail.css";
import { FcRating } from "react-icons/fc";
import {BsTrashFill} from "react-icons/bs"
import Card_detail_slider from '../slider/Cart_detail_slider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Cart = () => {
  const [price, setprice] = useState(0);
  const data = useSelector((state) => state.CartReducer.carts);
  const dispatch=useDispatch();
  const remove=(id)=>{
dispatch(REMOVE(id))
console.log(id)
  };
  const add=(id)=>{
    dispatch(ADD_ONE(id))
   
  };
  const dlt=(id,title)=>{
  dispatch(DLT(id));
  toast.warn(`Remove item ${title}`, {
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
  const total = () => {
    let price = 0
    data.map((item) => {
      price = item.price + price

    });
    setprice(price)
  };
  useEffect(() => {
    total()


  }, [total]);
  return (
    <div>
      <div className="cart_section">
        <div className="container">
          <div className="main_heading">
          <ToastContainer />
            <h2>
              details about the product

            </h2>
            <div className="cart_total">
            <p> ${price}  <div className="tet">
        {data.length}  items
       
        </div> </p>
              <h1>
               total price  {Math.floor(price )}
               <div className="discount">
                % discount
               </div>
              </h1>
            </div>
          </div>

          {
            data.map((item) => {
              return (
                <>

                  <div className="row cart_margin">
                    <div className="col-sm-6">
                      <div className="slider_cart">
                        <Card_detail_slider />

                        <div className="reviews_sectr">
                          <div className="h3">rating of product</div>
                          <span class="fa fa-star checked"></span>
                          <span>
                            <FcRating />
                          </span>
                          <span>
                            <FcRating />
                          </span>
                          <span>
                            <FcRating />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="bref_desc">

                        <h1 className=''>Product Name</h1>
                        <div className="detailing clor">
                          {item.title}
                        </div>
                        <h1>description</h1>
                        <div className="detailing">
                          {item.description}
                        </div>
                        <div className="price_box">
                          <div className="tittle_price">
                            <h2>  price of the product</h2>
                          </div>
                          <h2>
                            pkr $ : {item.price}
                          </h2>
                        </div>
                        <div className="detail_quantitiy_pdrct">
                          <h3>
                            quantity of product
                          </h3>
                          <div id="incdec">
                            <button className='btn_number minus' onClick={()=>remove(item.id)}><AiOutlineMinusCircle /></button>
                            {/* <input type="number" value={item.quantity} className='form_control' /> */}
                            {item.quantity}
                            <button className='btn_number plus' 
                            onClick={()=>add(item.quantity)}><AiOutlinePlusCircle/></button>

                          </div>
                        </div>
                        <div className="checkout_btn">
                          <button className='btn btn_danger btn_checkout'>
                            checkout
                          </button>

                          <button className='btn btn_danger btn_main' onClick={()=>dlt(item.id,item.title)}>
                           remove <span><BsTrashFill/></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Cart
