import React from 'react'
import "../style/about.css";
const About = () => {
  return (
    <div>
<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={require("../imges/about1.jpg")} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={require("../imges/about2.jpg")} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
    <img src={require("../imges/about3.jpg")} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div className="container">
<section className="about-section">
        <div className="container">
          <div className="row">                
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="title">About Amttradders</span>
                  <h2>We are Creative Online Seller Enthusiast working since 2015</h2>
                </div>
                <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ducimus neque aspernatur modi odio quae aut vitae dignissimos, animi maxime cupiditate, voluptate error excepturi. Reprehenderit rerum accusantium ea magni quibusdam culpa nihil ab assumenda, fugit, minima unde voluptatem facilis distinctio..</div>
                <div className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam consectetur ipsum molestias illum natus esse? Repellendus earum autem nisi sapiente reprehenderit, fuga asperiores provident dolorem vero incidunt consequuntur optio ratione vel modi aperiam odio a quaerat soluta officia recusandae hic temporibus officiis nam maiores! Dolore libero mollitia totam sapiente error possimus in, ad ab numquam, reprehenderit odit veniam hic animi?
                </div>
                <div className="btn-box">
                  <a href="#" className="theme-btn btn-style-one">Contact Us</a>
                </div>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInLeft">
                <div className="author-desc">
                  <h2>IBRAR TARAD</h2>
                  <span className='text-capitalize personality'>entrepreneur</span>
                </div>
                <figure className="image-1"><a href="#" className="lightbox-image" data-fancybox="images"><img title="Rahul Kumar Yadav" src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg" alt="" /></a></figure>
              </div>
            </div>
          </div>
          <div className="sec-title">
            <span className="title">Our Future Goal</span>
            <h2>We want to lead in innovation &amp; Technology</h2>
          </div>
          <div className="text">
            We works on UI/UX and functionality as well so that a plugins comes with proper stucture &amp; stunning looks which suits to your web app &amp; website.
          </div>
          <div className="text">
            We take a small toolkit here and ride it well so that it is fit for your use. One who performs well and looks even better.
          </div>
          <div className="text">                
            Here we are trying to give you all kinds of technical content, whether it is related to designing or functionality. We are creating content on a lot of languages and will continue to make it free of cost even if you use it without any problem. Which is a very important thing.
          </div>
          <div className="text">
            Here you can also share the content you create, if our technical team likes it, then we will also share it on our blog.
          </div>
          <div className="text">
            In the end, I would say keep visiting our website and enjoy the quality content.
          </div>
        </div>
      </section>
</div>

    </div>
  )
}

export default About