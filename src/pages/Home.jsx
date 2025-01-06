import React from "react";
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
  return (
    <div>
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
    </div>
  );
};

export default Home;
