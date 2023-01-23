
import React from "react";
import Slider from "react-slick";
const Main_slider = () => {
    const settings = {
        dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
      };
  return (
    <div>
      <div className="slider_main">
      <Slider {...settings}>
          <div>
            <div className="main_img">
                <img src={require("../imges/mainslider.jpg")} alt="img" className="img-fluid w-100" />
            </div>
          </div>
          <div>
          <div className="main_img">
          <img src={require("../imges/mainslider2.jpeg")} alt="img" className="img-fluid w-100" />
            </div>
          </div>
          <div>
          <div className="main_img">
          <img src={require("../imges/mainslider3.jpg")} alt="img" className="img-fluid w-100" />
            </div>
          </div>
          <div>
          <div className="main_img">
          <img src={require("../imges/mainslider4.jpg")} alt="img" className="img-fluid w-100" />
            </div>
          </div>
          <div>
          <div className="main_img">
          <img src={require("../imges/mainslider5.jpg")} alt="img" className="img-fluid w-100" />
            </div>
          </div>
         
        </Slider>
      </div>
    </div>
  )
}

export default Main_slider
