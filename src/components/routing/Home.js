import React from 'react'
import Card from '../products/Card';
import Main_slider from '../slider/Main_slider';

const Home = () => {
  return (
    <div>
<div className="home_pages_section">
<Main_slider/>
<div className="container">
<div className="product_cart">
  <Card/>
</div>

 
</div>

</div>


    </div>
  )
}

export default Home;