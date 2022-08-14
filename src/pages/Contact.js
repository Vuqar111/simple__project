import React from "react";
import {AiOutlineClose} from 'react-icons/ai';
// import { useForm, ValidationError } from '../../node_modules/@formspree/react';

const Contact = (props) => {
  
    // const [state, handleSubmit] = useForm("maykybzq");
    // if (state.succeeded) {
    //     return <p>Thanks for joining!</p>;
    // }  

  const { openContact, setOpenContact } = props;
  return (
    <div
      className={
        openContact ? "contact__container--deactive" : "contact__container"
      }
    >
        <div>
        <h2>Get In Touch</h2>

<form  className="form">
  <div className="firstInputBox">
    <div className="primaryInputBox">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Enter your name"
      />
       {/* <ValidationError 
        prefix="name" 
        field="name"
        errors={state.errors}
      /> */}
    </div>
    <div className="secondaryInputBox">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
      />
       {/* <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      /> */}
    </div>
  </div>
  <div className="inputBox">
    <input
      type="subject"
      name="subject"
      id="subject"
      placeholder="Enter your subject"
    />
       {/* <ValidationError 
        prefix="subject" 
        field="subject"
        errors={state.errors}
      /> */}
  </div>
  <div className="inputBox">
    <textarea
      type="text"
      name="message"
      id="message"
      placeholder="Enter your message"
    />
       {/* <ValidationError 
        prefix="message" 
        field="message"
        errors={state.errors}
      /> */}
  </div>
  <div className="sendButton">
    <button type="submit">Send Message to me</button>
  </div>
</form>
        </div>
        <div className='closeBtn' onClick={() => setOpenContact(true)}>
                <AiOutlineClose className='closeBtn__icon'/>
            </div>
    </div>
  );
};

export default Contact;
