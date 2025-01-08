import React, { useEffect } from "react";
import "./Galery.css";
import imagesGallery from "../constants/images-gallery";

function GaleryPage() {
  const imageList = [
    imagesGallery.g1,
    imagesGallery.g2,
    imagesGallery.g77,
    imagesGallery.g88,
    imagesGallery.g99,
    imagesGallery.g9,
    imagesGallery.g14,
    imagesGallery.g8,
    imagesGallery.g16,
    imagesGallery.g17,
    imagesGallery.g18,
    imagesGallery.t1,
    imagesGallery.t2,
    imagesGallery.t3,
    imagesGallery.t4,
    imagesGallery.t5,
    imagesGallery.t6,
    imagesGallery.t7,
    imagesGallery.t8,
    imagesGallery.t9,
    imagesGallery.t10,
    imagesGallery.t11,
    imagesGallery.t12,
    imagesGallery.g5,
    imagesGallery.g6,
    imagesGallery.g7,
    imagesGallery.g55,
    imagesGallery.g66,
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="gallery-container" style={{paddingBottom: "50px"}}>
      {imageList.map((image, index) => (
        <div className="div" key={index}>
          <img src={image} alt={`Gallery ${index}`} className="gallery-item" />
        </div>
      ))}
    </div>
  );
}

export default GaleryPage;
