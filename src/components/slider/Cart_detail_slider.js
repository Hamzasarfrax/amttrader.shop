import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useSelector } from 'react-redux';
let slider1 = null;
let slider2 = null;
const AsNavFor = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
 
  const setimg = useSelector((state) => state.CartReducer.carts);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, []);

  return (
    <div>
   <div className="cart_detail_slider ">
      <Slider asNavFor={nav2} ref={(slider) => (slider1 = slider)}>
      <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
      
      <Slider
        asNavFor={nav1}
        ref={(slider) => (slider2 = slider)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
    </div>
  );
};

export default AsNavFor;
