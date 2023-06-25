import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useSelector } from 'react-redux';
let slider1 = null;
let slider2 = null;
const AsNavFor = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const setimg = useSelector((state) => state.CartReducer.carts);
  console.log(setimg);
  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, []);

  return (
    <div>
    
        
              {/* <div className="cart_detail_slider ">
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
              </div> */}

    
    </div>
  );
};

export default AsNavFor;
