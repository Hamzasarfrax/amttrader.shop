import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DLT, REMOVE, ADD_ONE, ADD } from '../Redux/Actions/Action';
import { AiOutlinePlusCircle, AiOutlineMinusCircle, AiOutlineDollar } from "react-icons/ai";
import "../style/cart-detail.css";
import { FcRating } from "react-icons/fc";
import { BsTrashFill } from "react-icons/bs"
import Card_detail_slider from '../slider/Cart_detail_slider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from "jquery";
import { NavLink, useNavigate } from 'react-router-dom';
import Slider from "react-slick";

let slider1 = null;
let slider2 = null;
const Cart = () => {
  const [price, setprice] = useState(0);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  console.log(price)
  const data = useSelector((state) => state.CartReducer.carts);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const remove = (id) => {
    dispatch(REMOVE(id))

  };
  const add = (id) => {
    dispatch(ADD_ONE(id));


  };
  const dlt = (id, title) => {
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
      price = item.price * item.quantity + price

    });
    setprice(price)
  };


  useEffect(() => {



    total()


  }, [total]);
  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, []);
  return (
    <div>

      {
        data.length == 0 ? (<div className="container">
          <div className="card_wrap">
            <div className="heading text-danger text-capitalize text-center">
              <h1>pleadse add some products</h1>
            </div>
            <div className="text-center text-capitalize text-danger">
              <h3>
                there is no product to checkout
              </h3>
              <div className="text-capitalize mt-5 mb-4">
                <NavLink to="/" className="anchor_emty_cart">go to add some products</NavLink>
              </div>
            </div>
          </div>
        </div>) : (<div className="cart_section">
          <div className="container">
            <div className="main_heading">
              <ToastContainer />
              <h2>
                details about the product

              </h2>
              <div className="cart_total">
                <p> ${price}  <div className="tet">
                  <span id='cart_lenght'>{data.length} </span> items

                </div> </p>
                <h1>
                  total price <span><AiOutlineDollar /></span> :  {Math.floor(price)}
                  <div className="discount">
                  {price}  % discount
                  </div>
                </h1>
              </div>
            </div>

            {
              data.map((item) => {
                return (
                  <>

                    <div className="row cart_margin">
                      <div className="col-sm-6" id='margin_padding'>
                        <div className="slider_cart">
                        <div className="cart_detail_slider ">
                <Slider asNavFor={nav2} ref={(slider) => (slider1 = slider)}>
                  <div>
                    <img src={item.image} alt="" className="img-fluid  imge_main rounded" />
                  </div>
                  <div>
                    <img src={item.image1} alt="" className="img-fluid  imge_main rounded" />
                  </div>
                  <div>
                    <img src={item.image2} alt="" className="img-fluid  imge_main rounded" />
                  </div>
                  <div>
                    <img src={item.image3} alt="" className="img-fluid  imge_main rounded" />
                  </div>
               


                </Slider>

                <Slider
                  asNavFor={nav1}
                  ref={(slider) => (slider2 = slider)}
                  slidesToShow={3}
                  swipeToSlide={true}
                  focusOnSelect={true}
                >
                  <div className="">
                    <img src={item.image} alt="" className="img-fluid  rounded" />
                  </div>

                  <div className="">
                    <img src={item.image1} alt="" className="img-fluid  rounded" />
                  </div>
                  <div className="">
                    <img src={item.image2} alt="" className="img-fluid  rounded" />
                  </div>
                  <div className="">
                    <img src={item.image3} alt="" className="img-fluid  rounded" />
                  </div>


                </Slider>
              </div>

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
                              pkr $ : {item.price * item.quantity}
                            </h2>
                          </div>
                          <div className="detail_quantitiy_pdrct">
                            <h3>
                              quantity of product <span> {item.quantity}</span>
                            </h3>
                            <div id="incdec">
                              <button className='btn_number minus' onClick={() => remove(item.id)}><AiOutlineMinusCircle /></button>

                              <div className="quantity_item">
                                {item.quantity}
                              </div>
                              <button className='btn_number plus'
                                onClick={() => add(item.id)}><AiOutlinePlusCircle /></button>

                            </div>
                          </div>
                          <div className="checkout_btn">
                          <NavLink className='btn btn_danger btn_checkout' to={`/checkout/${item.id}`}>
  checkout
</NavLink>

                            <button className='btn btn_danger btn_main' onClick={() => dlt(item.id, item.title)}>
                              remove <span><BsTrashFill /></span>
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
        </div>)
      }


    </div>
  )
}

export default Cart;
