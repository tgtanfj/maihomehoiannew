import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import { useNavigate } from "react-router-dom";

const FindUs = () => {
  const navigate = useNavigate();

  return (
    <div className="app__bg app__wrapper section__padding" id="findus">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
          Find Us
        </h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">
            Cam Ha, Hoi An, Quang Nam 560000, Vietnam
          </p>
          <p
            className="p__cormorant"
            style={{ color: "#DCCA87", margin: "2rem 0" }}
          >
            Opening Hours
          </p>
          <p className="p__opensans">Sun: 08:30 am - 17:00 am</p>
          <p className="p__opensans">Other days: 10:00 am - 17:00 pm</p>
        </div>
        <button
          onClick={() => navigate("/map")}
          type="button"
          className="custom__button"
          style={{ marginTop: "2rem" }}
        >
          Visit Us
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.buncha} alt="finus_img" />
      </div>
    </div>
  );
};

export default FindUs;
