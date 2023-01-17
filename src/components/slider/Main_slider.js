
import React from "react";
import Slider from "react-slick";
const Main_slider = () => {
    const settings = {
        dots: false,
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
                <img src="https://dummyimage.com/1280x500/000/fff&text=1280*500" alt="img" className="img-fluid w-100" />
            </div>
          </div>
          <div>
          <div className="main_img">
                <img src="https://dummyimage.com/1280x500/000/fff&text=1280*500" alt="img" className="img-fluid w-100" />
            </div>
          </div>
          <div>
          <div className="main_img">
                <img src="https://dummyimage.com/1280x500/000/fff&text=1280*500" alt="img" className="img-fluid w-100" />
            </div>
          </div>
          <div>
          <div className="main_img">
                <img src="https://dummyimage.com/1280x500/000/fff&text=1280*500" alt="img" className="img-fluid w-100" />
            </div>
          </div>
          <div>
          <div className="main_img">
                <img src="https://dummyimage.com/1280x500/000/fff&text=1280*500" alt="img" className="img-fluid w-100" />
            </div>
          </div>
          <div>
          <div className="main_img">
                <img src="https://dummyimage.com/1280x500/000/fff&text=1280*500" alt="img" className="img-fluid w-100" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Main_slider
