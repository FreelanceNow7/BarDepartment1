import React from "react";
import "./WhyUs.css";

export const WhyUs = () => {
  return (
    <div className='whyus-container' id='whyus'>
      <div id='whyus-title'>WHY BAR DEPARTMENT</div>
      <div id='whyus-history'>
        <p>
          At Bar Department, we believe that every event is a unique narrative
          waiting to unfold, and we're here to add the perfect flavor to your
          story. As a premier catering bartending service, we don't just serve
          drinks; we craft experiences that linger in the memories of your
          guests.
        </p>
        <p>
          Established in 2019, Bar Department was born out of a passion for
          mixology and a commitment to turning ordinary gatherings into
          extraordinary celebrations. What sets us apart is not just the quality
          of our beverages but the artistry with which we blend spirits,
          flavors, and a touch of magic.
        </p>
      </div>
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
