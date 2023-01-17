import React from 'react';
import "../style/card.css";
const Card = () => {
  return (
    <div>
     <div className="row">
        <div className="col-sm-4">
        <div className="add_to_cart">
        <div className="card_box_main">
<div className="img">
    <img src="https://dummyimage.com/300x150/000/fff&text=300x150-cart" alt="cart-img"  className='img-fluid rounded' />
</div>

<div className="card_body">
<div className="cart_title">
    product name
</div>
    <div className="cart_desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, repellendus!
    </div>

<div className="cart_price">
    <span className='rupee'>pkr</span>
    <span>12000</span>
</div>
<button className='btn btn_cart btn_main'>add to cart</button>

</div>

        </div>
      </div>
        </div>
        <div className="col-sm-4">
        <div className="add_to_cart">
        <div className="card_box_main">
<div className="img">
    <img src="https://dummyimage.com/300x150/000/fff&text=300x150-cart" alt="cart-img"  className='img-fluid rounded' />
</div>

<div className="card_body">
<div className="cart_title">
    product name
</div>
    <div className="cart_desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, repellendus!
    </div>

<div className="cart_price">
    <span className='rupee'>pkr</span>
    <span>12000</span>
</div>
<button className='btn btn_cart btn_main'>add to cart</button>

</div>

        </div>
      </div>
        </div>


        <div className="col-sm-4">
        <div className="add_to_cart">
        <div className="card_box_main">
<div className="img">
    <img src="https://dummyimage.com/300x150/000/fff&text=300x150-cart" alt="cart-img"  className='img-fluid rounded' />
</div>

<div className="card_body">
<div className="cart_title">
    product name
</div>
    <div className="cart_desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, repellendus!
    </div>

<div className="cart_price">
    <span className='rupee'>pkr</span>
    <span>12000</span>
</div>
<button className='btn btn_cart btn_main'>add to cart</button>

</div>

        </div>
      </div>
        </div>
     </div>
    </div>
  )
}

export default Card
