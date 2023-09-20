import React from "react";
import "./ContactUs.css";
import img from "../../data/logoTab.png";

export const ContactUs = () => {
  return (
    <section className='contactus-container' id='contact'>
      <div className='contactus-container'>
        <div className='contactus-title'>
          <p>Contact us</p>
          <p>hello@bardepartment.com</p>
        </div>
        <div className='contactus-text'>
          <p>Follow us:</p>
          <p>IG: @bardepartment</p>
          <p>TikTok: @bardepartment</p>
        </div>
        <img src={img} alt='contactTabLogo' id='contactusLogo'></img>
        <div className='contactus-text2'>
          <p>©Bar Department 2023. All rights reserved</p>
        </div>
      </div>
    </section>
  );
};
