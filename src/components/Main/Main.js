import React from "react";

import { Navbar } from "../Navbar/Navbar";
import { Home } from "../Home/Home";
import { WhyUs } from "../WhyUs/WhyUs";
import { Services } from "../Services/Services";
import { AboutUs } from "../AboutUs/AboutUs";
import { Reviews } from "../Reviews/Reviews";
import { GetAQuote } from "../GetAQuote/GetAQuote";

export const Main = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <WhyUs />
      <Services />
      <AboutUs />
      <Reviews />
      <GetAQuote />
    </div>
  );
};
