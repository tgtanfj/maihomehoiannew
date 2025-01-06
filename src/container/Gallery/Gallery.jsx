import React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { MdRestaurant } from "react-icons/md";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.css";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const scrollRef = React.useRef(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center" id="gallery">
      <div className="app__gallery-content">
        <SubHeading title="Mai Home Hoi An" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p
          className="p__opensans"
          style={{ color: "#AAAAAA", marginTop: "2rem" }}
        >
          Take a closer look at us.
        </p>
        <button
          onClick={() => navigate("/gallery")}
          type="button"
          className="custom__button"
        >
          View More
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[
            images.g1,
            images.g2,
            images.g77,
            images.g88,
            images.g99,
            images.g9,
            images.g14,
            images.g8,
            images.g16,
            images.g17,
            images.g18,
          ].map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery_image" />
              <MdRestaurant className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
