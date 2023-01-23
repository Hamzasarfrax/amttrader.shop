import React, { Component } from "react";
import Slider from "react-slick";

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }
 
  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
 
  }
 
  render() {
    return (
      <div>
     <div className="main_cart_detail_slider">
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <div>
            <img src="https://dummyimage.com/500x300/000/fff&text=cartmain-img" alt="" 
                className="img-fluid rounded"
            />
          </div>
          <div>
          <img src="https://dummyimage.com/500x300/000/fff&text=cartmain-img" alt="" 
                className="img-fluid rounded"
            />
          </div>
          <div>
          <img src="https://dummyimage.com/500x300/000/fff&text=cartmain-img" alt="" 
                className="img-fluid rounded"
            />
          </div>
          <div>
          <img src="https://dummyimage.com/500x300/000/fff&text=cartmain-img" alt="" 
                className="img-fluid rounded"
            />
          </div>
          <div>
          <img src="https://dummyimage.com/500x300/000/fff&text=cartmain-img" alt="" 
                className="img-fluid rounded"
            />
          </div>
          <div>
          <img src="https://dummyimage.com/500x300/000/fff&text=cartmain-img" alt="" 
                className="img-fluid rounded"
            />
          </div>
        </Slider>
     
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div>
          <img src="https://dummyimage.com/500x300/000/fff&text=cartmain-img" alt="" 
                className="img-fluid rounded"
            />
          </div>
          <div>
          <img src="https://dummyimage.com/500x300/000/fff&text=cartmain-img" alt="" 
                className="img-fluid rounded"
            />
          </div>
          <div>
          <img src="https://dummyimage.com/500x300/000/fff&text=cartmain-img" alt="" 
                className="img-fluid rounded"
            />
          </div>
          <div>
          <img src="https://dummyimage.com/500x300/000/fff&text=cartmain-img" alt="" 
                className="img-fluid rounded"
            />
          </div>
          <div>
          <img src="https://dummyimage.com/500x300/000/fff&text=cartmain-img" alt="" 
                className="img-fluid rounded"
            />
          </div>
          <div>
          <img src="https://dummyimage.com/500x300/000/fff&text=cartmain-img" alt="" 
                className="img-fluid rounded"
            />
          </div>
        </Slider>
      </div>
      </div>
    );
  }
}