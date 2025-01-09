import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import p6first from "../assets/tour6/1.jpg";
import p6second from "../assets/tour6/2.jpg";
import p4first from "../assets/tour4/1.jpg";
import pbamboofirst from "../assets/tourbamboo/1.jpg";
import pbamboosecond from "../assets/tourbamboo/2.jpg";
import "./TourDetail.css";
import t1 from "../assets/galery/t1.jpg";
import t3 from "../assets/galery/t3.jpg";
import t8 from "../assets/galery/t8.jpg";

const tours = [
  {
    slug: "package-4-hours-class",
    name: "Walk in - 4 Hour Cooking Class",
    background: t1,
    image: [p4first],
  },
  {
    slug: "package-6-hours-class",
    name: "Package 6 Hours Class",
    background: t3,
    image: [p6first, p6second],
  },
  {
    slug: "bamboo-basket-boat-and-cooking",
    name: "Bamboo basket boat & Cooking at Tra Que Vegetable Village",
    background: t8,
    image: [pbamboofirst, pbamboosecond],
  },
];

const TourDetail = () => {
  const { slug } = useParams();
  const tour = tours.find((tour) => tour.slug === slug);

  useEffect(() => {
    const tourTitles = {
      "package-4-hours-class":
        "Walk in - 4 Hour Cooking Class | Mai Home Hoi An",
      "package-6-hours-class": "Package 6 Hours Class | Mai Home Hoi An",
      "bamboo-basket-boat-and-cooking":
        "Bamboo basket boat & Cooking at Tra Que Vegetable Village | Mai Home Hoi An",
    };
    window.scrollTo(0, 0);
    document.title = tourTitles[slug] || "Mai Home Hoi An";
  }, []);

  if (!tour) {
    return <h1>Tour not found</h1>;
  }

  return (
    <>
      <div className="hero">
        <div>
          <img
            alt="People participating in a cooking class, wearing aprons and working together."
            height="500"
            src={tour.background}
            width="1920"
          />
          <div className="overlay"></div>
          <div className="hero-text">
            <h1>{tour.name}</h1>
            <p>Mai Home Hoi An Cooking Class &amp; Restaurant</p>
          </div>
        </div>
      </div>

      <div className="tour-detail">
        <div className="tour-images">
          {tour.image.map((img, index) => (
            <div key={index} className="image-container">
              <img
                src={img}
                alt={`Tour image ${index + 1}`}
                className="tour-image"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TourDetail;
