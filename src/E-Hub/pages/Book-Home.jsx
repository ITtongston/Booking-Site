import React, { useRef } from "react";
import Feature1 from "../components/Feature1"; 
import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import OurOffers from "../components/OurOffers";
import { products } from "../Data/productsData";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
const Home = () => {

  const workspaces = useRef(null);

  const scrollToWorkSpaces = (workspaceRef) => {
    window.scrollTo({
      top: workspaceRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <Hero />
      <Feature1/> 
      <WhatWeDo />
      <OurOffers products={products} />
      <Footer/>
      <ScrollToTop/>
    </>
  );
};

export default Home;
