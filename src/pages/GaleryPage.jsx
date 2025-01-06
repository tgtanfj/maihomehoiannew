import React, { useEffect, useState } from "react";
import "./Galery.css";
import imagesGallery from "../constants/images-gallery";

function GaleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {[
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
        ].map((image, index) => (
          <div className="div" key={index}>
            <img
              src={image}
              alt={`Gallery ${index}`}
              className="gallery-item"
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="overlay" onClick={closeImage}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Selected" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
}

export default GaleryPage;
