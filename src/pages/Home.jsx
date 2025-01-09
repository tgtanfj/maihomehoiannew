import React, { useEffect } from "react";
import {
  AboutUs,
  Chef,
  FindUs,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "../container";

const Home = () => {
  useEffect(() => {
    document.title = "Mai Home Hoi An - The Best Tour In Hoi An";
  }, []);
  return (
    <div>
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      {/* <Laurels /> */}
      <Gallery />
      <FindUs />
    </div>
  );
};

export default Home;
