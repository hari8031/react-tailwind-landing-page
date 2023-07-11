import React from "react";
import NavBar from "./Components/NavBar";
import HeroSec from "./Components/HeroSec";
import FeaturesSec from "./Components/FeatureSec/FeaturesSec";
import Testimonials from "./Components/Testimonials/Testimonials";
import CtaSec from "./Components/CtaSec";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSec />
      <FeaturesSec />
      <Testimonials />
      <CtaSec />
      <Footer />
    </div>
  );
};

export default App;
