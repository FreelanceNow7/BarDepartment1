import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import "./GetAQuote.css";

export const GetAQuote = () => {
  const [sent, setSent] = useState("false");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        form.current,
        "service_jte2mhe"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <div id='title'>
        <h3>LET'S TALK</h3>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className='contact-form-container'
        id='getAQuote'
      >
        <div className='form-group'>
          <label className='input-label' htmlFor='firstname'>
            First Name
          </label>
          <input
            className='input-field'
            type='text'
            name='user_name'
            placeholder='Enter your first name'
            required
          />
        </div>
        <div className='form-group'>
          <label className='input-label' htmlFor='lastname'>
            Last Name
          </label>
          <input
            className='input-field'
            type='text'
            name='user_name'
            placeholder='Enter your  last name'
            required
          />
        </div>
        <div className='form-group'>
          <label className='input-label' htmlFor='email'>
            Email
          </label>
          <input
            className='input-field'
            type='email'
            name='user_email'
            placeholder='Enter your email'
            required
          />
        </div>
        <div className='form-group'>
          <label className='input-label' htmlFor='phonenumber'>
            Phone number
          </label>
          <input
            className='input-field'
            type='text'
            name='user_name'
            placeholder='Enter your phone number'
            required
          />
        </div>
        <div className='form-group'>
          <label className='input-label' htmlFor='message'>
            Type of event
          </label>
          <textarea
            className='input-field if-text'
            name='message'
            placeholder='Where will event take place, how many people...'
            required
          />
        </div>
        {sent === true ? (
          <button className='contact-button' disabled>
            Message Sent!
          </button>
        ) : (
          <button className='contact-button' type='submit' value='Send'>
            Submit
          </button>
        )}
      </form>
    </div>
  );
};
