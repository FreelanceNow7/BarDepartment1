import React from "react";
import "./WhyUs.css";

export const WhyUs = () => {
  return (
    <div className='whyus-container' id='whyus'>
      <div id='whyus-title'>WHY BAR DEPARTMENT</div>
      <div id='whyus-text'>
        <div id='craftsmanship'>
          <h3>Exquisite Craftsmanship</h3>
          <p>
            Immerse your guests in the artistry of mixology with our bartenders'
            precise techniques, finest ingredients and attention to detail,
            creating drinks that are true masterpiece.{" "}
          </p>
        </div>
        <div id='experience'>
          <h3>Personalized Experience</h3>
          <p>
            Elevate your event to new heights with our tailored beverage menus,
            signature cocktails and themed bars that reflect your unique vision
            and leave a lasting impression on your guests.
          </p>
        </div>
        <div id='professionalism'>
          <h3>Unmatched Professionalism</h3>
          <p>
            Experience a seamless and extraordinary service from our team of
            seasoned bartenders who bring a level of professionalism and
            expertise honed in Michelin star restaurants and high-profile
            events, ensuring a flawless event execution.
          </p>
        </div>
      </div>
    </div>
  );
};
