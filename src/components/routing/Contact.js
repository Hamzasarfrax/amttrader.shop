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
    }
    else{
      alert("form submit")
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
            <div className="conatct_form">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
   
        <Form.Group controlId="validationCustom01" className='form_group'>
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
        
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group  controlId="validationCustom02" className='form_group'>
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
       
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      
     
        <Form.Group  controlId="validationCustom02" className='form_group'>
          <Form.Label>email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="user@gmail.com"
            
          />
          <Form.Control.Feedback> email looks good!</Form.Control.Feedback>
        </Form.Group>
     
     <div className="form_group ">
     <Form.Control as="textarea" className='text_area' placeholder="Leave a comment here" />
     </div>
        
      <Form.Group className="mb-3 form_group" >
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button  type="submit" className='btn btn_main btn_form'>Submit form</Button>
    </Form>
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