import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import "../style/page404.css";
const Page404 = () => {
     const { param1 } = useParams();
     const [param, setparam] = useState(param1)
setparam(param1)
     return (
          <div>

               <div className="container">
                    <div className="card_wrap">
                         <section class="page_404">
                              <div className="params_not">
                                   {param} not found
                              </div>
                              <div class="">
                                   <div class="row">
                                        <div class="col-sm-12 ">
                                             <div class=" col-sm-offset-1  text-center">
                                                  <div class="four_zero_four_bg">
                                                       <h1 class="text-center ">404

                                                       </h1>


                                                  </div>

                                                  <div class="contant_box_404">
                                                       <h3 class="h2">
                                                            Look like you're lost
                                                       </h3>

                                                       <p className='params'>the page you are looking for not avaible!</p>

                                                       <NavLink to="/" className="link_404">Go to Home</NavLink>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </section>
                    </div>
               </div>

          </div>
     )
}

export default Page404