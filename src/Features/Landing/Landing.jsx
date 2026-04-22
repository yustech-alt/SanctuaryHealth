import React from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Stats from "./Stats";
import Features from "./Features";
import Process from "./Process";
import Testimonials from "./Testimonials";
import CTA from "./CTA";
// import Footer from "./Footer";

export default function Landing() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Process />
      <Testimonials />
      <CTA />
      {/* <Footer /> */}
    </div>
  );
}