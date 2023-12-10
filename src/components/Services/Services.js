import React from "react";
import "./Services.css";

export const Services = () => {
  return (
    <section className='services-container' id='services'>
      <div className='our-services'>
        <div className='services-inner-box'>
          <div id='services-title'>OUR SERVICES</div>
          <div id='services-text'>
            <div id='first-row'>
              <div id='service1'>
                <h3>Classic Elegance Package</h3>
                <p>
                  A sophisticated offering suitable for weddings and formal
                  events, featuring experienced bartenders, a full bar setup,
                  and a customized beverage menu with a touch of elegance.
                </p>
              </div>
              <div id='service2'>
                <h3>Signature Mixology Experience</h3>
                <p>
                  Tailored for corporate events and cocktail parties. This
                  package showcases expert mixologists, a mobile bar setup,
                  interactive mixology demonstrations, and a customized menu of
                  signature cocktails.
                </p>
              </div>
              <div id='service3'>
                <h3>Casual Celebrations Package</h3>
                <p>
                  Designed for informal gatherings and outdoor events, this
                  package includes skilled bartenders, a limited bar setup, a
                  flexible beverage menu, and a casual bar decor for a relaxed
                  atmosphere.
                </p>
              </div>
            </div>
            <div id='second-row'>
              <div id='service4'>
                <h3>Luxury Libations Experience</h3>
                <p>
                  An upscale package for luxurious events and galas, offering
                  master mixologists, a top-shelf bar setup, an exclusive
                  beverage menu featuring rare selections, and opulent bar decor
                  with VIP service.
                </p>
              </div>
              <div id='service5'>
                <h3>Thirsty Thursdays Social Package</h3>
                <p>
                  Tailored for social clubs and weekly networking events, this
                  package features social bartenders, a portable weekly bar
                  setup, rotating beverage menus, themed bar nights, and
                  interactive social media engagement.
                </p>
              </div>
              <div id='service6'>
                <h3>Family-Friendly Fiesta Package</h3>
                <p>
                  Ideal for family celebrations and outdoor gatherings, this
                  package offers friendly bartenders, kid-friendly drink
                  options, a casual bar setup, all-ages activities, and
                  coordinated themes for a family-friendly fiesta.
                </p>
              </div>
            </div>
            <div id='third row'>
              <p>All packages include efficient post-event cleanup.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
