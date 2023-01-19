import React from 'react'
import "../style/card.css";
const Car = () => {
     return (
          <div>
               <div className="container">
                    <div className="row">
                         <div className="col-sm-4">
                              <div className="card_product">
                                   <div className="ow">

                                        <div className="">
                                             <div className="card_right">
                                                  <div className="card_img">
                                                       <img src="https://www.dropbox.com/s/xjjomt5hmc99nql/camera-32871_640.png?raw=1" />
                                                  </div>


                                             </div>
                                        </div>
                                        <div className="">

                                             <div className="card_body">
                                                  <div className="text-center">
                                                       card details
                                                  </div>
                                                  <div className="card_heading">
                                                       <div className="card_key">
                                                            name
                                                       </div>
                                                       <div className="card_value">
                                                            : 12000
                                                       </div>

                                                       <div className="card_key">
                                                            price
                                                       </div>
                                                       <div className="card_value">
                                                            : 12000
                                                       </div>



                                                  </div>
                                             </div>
                                        </div>

                                   </div>
                                   <div className="btns">
                                        <button className='btn btn_cart'>
                                             add to cart
                                        </button>
                                   </div>
                              </div>

                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Car