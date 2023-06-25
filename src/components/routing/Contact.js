import React, { useState } from 'react';
import "../style/contact.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const fnam = event.target.elements.fnam.value;
      const lname = event.target.elements.lname.value;
      const email = event.target.elements.email.value;
      const message = event.target.elements.message.value;
  
      fetch('http://localhost:2000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fnam,
          lname,
          email,
          message
        })
      })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          alert("Form submitted successfully!");
        } else {
          alert("Failed to submit form.");
        }
      })
      .catch(error => console.error(error));
    }
  
    setValidated(true);
  };
  

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
          <div class="conatct_form">
  <form method='post' action='http://localhost:2000/contact'> 
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">first name</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="username" name='fnam'/>
    </div>
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">last name</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="last name" name='lname'/>
    </div>
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name='email'/>
    </div>
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">phone number</label>
    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="1234567890" name='phonenum'/>
    </div>
    <div class="mb-3"><label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name='message'></textarea>
    </div>
    <button type='submit' class="btn btn_main btn_form">submit</button>
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