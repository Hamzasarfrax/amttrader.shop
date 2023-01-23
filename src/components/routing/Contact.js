import React from 'react'
import "../style/contact.css";
const Contact = () => {
  return (
    <div>

<div className="container">
  <div className="row">
    <div className="col-sm-12">
      <div className="box_contactus">
        <div className="main_heading">
          contact us
        </div>
      
         <div className="card_wrap">
          <div className="card_body">
          <div className="row">
          <div className="col-sm-6">
       <div className="contact_img">
        <img src={require("../imges/contact-email.png")} alt="" />
       </div>
          </div>
          <div className="col-sm-6">
            <div className="conatct_form">
              <form action="">
              <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">first name</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="username"/>
</div>
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">last name</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="last name"/>
</div>
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">phone number</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="1234567890"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button className='btn btn_main btn_form'>submit</button>
              </form>
            </div>
          </div>
          </div>
         </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Contact