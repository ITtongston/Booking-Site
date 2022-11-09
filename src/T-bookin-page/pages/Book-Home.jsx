import React from "react";
import Feature1 from "../components/Feature1"; 
import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import OurOffers from "../components/OurOffers";
import { products } from "../Data/productsData";
const Home = () => {
  return (
    <>
      <Hero/>
      <Feature1/> 
      <WhatWeDo />
      <OurOffers products={products} />
    </>
  );
};

export default Home;
