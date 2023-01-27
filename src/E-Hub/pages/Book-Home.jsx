import React from "react";
import Feature1 from "../components/Feature1";
import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import OurOffers from "../components/OurOffers";
import { products } from "../Data/productsData";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import MediaHome from "../components/Consultations/Media/MediaHome";
import { Divider } from "@mui/material";
import Entrepreneurial from "../components/Consultations/Entreprenurial/Entrepreneurial";
import HubSummary from "../components/HubSummary";
import Partners from "../components/Partners";
import GoogleContainer from "../components/GoogleContainer";


const Home = () => {
  return (
    <>
      <Hero />
      <Feature1 />
      <WhatWeDo />
      <HubSummary />
      <OurOffers products={products} />
      <Divider variant="middle" sx={{ mt: 15, mx: 5 }} />
      <MediaHome />
      <Entrepreneurial />
      <Partners/>
      <GoogleContainer/>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;
