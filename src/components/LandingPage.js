import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";

const LandingPage = () => {
  return (
    <div className="h-[100vh] w-[75%] mx-[10rem]">
      <Header />
      <HeroSection />
    </div>
  );
};

export default LandingPage;
