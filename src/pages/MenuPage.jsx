import React, { useEffect } from "react";
import "./MenuPage.css";
import imagesMenu from "../constants/images-menu";

const images = [
  imagesMenu.menu1,
  imagesMenu.menu2,
  imagesMenu.menu3,
  imagesMenu.menu4,
  imagesMenu.menu5,
  imagesMenu.menu6,
  imagesMenu.menu7,
  imagesMenu.menu8,
  imagesMenu.menu9,
  imagesMenu.menu10,
  imagesMenu.menu11,
  imagesMenu.menu12,
  imagesMenu.menu13,
];

const MenuPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Menu | Mai Home Hoi An";
  }, []);

  return (
    <div className="menu-page">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontSize: "50px",
            fontWeight: "bold",
            paddingBottom: "30px",
            color: "#DCCA87",
          }}
        >
          Our Menu
        </p>
      </div>
      <div className="image-container" style={{marginBottom: "50px"}}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="menu-image"
          />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
