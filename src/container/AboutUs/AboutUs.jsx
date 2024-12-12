import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.m} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Welcome to Mai Home Hoi An Cooking Class and Restaurant, where
          tradition meets taste in the heart of our community. Founded by Hung
          in 2013, we have spent over a decade sharing our passion for local
          traditional cuisine with guests from around the world. With
          deep-rooted expertise in the flavors and techniques that make our
          culinary heritage so unique, we offer a wide variety of cooking
          classes designed to suit all skill levels — whether you’re a beginner
          or a seasoned chef.
          <br />
          <br />
          Our restaurant brings these same authentic, locally-inspired dishes to
          your table, with options for both lunch and dinner. Each meal is
          crafted to offer an unforgettable experience of local flavors, made
          from the freshest ingredients. Whether you’re here to cook, dine, or
          simply explore the culinary culture of the region, we promise to
          deliver the best local experience possible.
          <br />
          <br />
          Join us for a hands-on cooking adventure, a delicious meal, or both —
          and immerse yourself in the rich tastes of our tradition.
        </p>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.dua2} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our Story</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Welcome to Mai Home Hoi An Cooking Class and Restaurant – where the
          rich flavors of Vietnam meet the warmth of traditional hospitality.
          Founded by Hung and Thanh, a dynamic husband-and-wife team with a
          shared passion for food, culture, and community, our mission is to
          offer a unique and immersive culinary experience in the heart of Hoi
          An.
          <br />
          <br />
          Hung, a local chef with deep roots in the region’s culinary
          traditions, brings a wealth of expertise and a true love for authentic
          Vietnamese cuisine. Thanh, a dedicated hospitality professional,
          ensures every guest feels like family, offering a warm welcome and a
          memorable experience from the moment you step through our doors.
          <br />
          <br />
          At Mai Home, we believe that cooking is an art form and a way to
          connect people. Whether you’re participating in one of our hands-on
          cooking classes or enjoying a delicious meal at our restaurant, you’ll
          discover the magic of Vietnamese ingredients, techniques, and flavors.
          We’re excited to share the tastes of our homeland with you and invite
          you to join us on a culinary journey that’s both delicious and
          meaningful.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
