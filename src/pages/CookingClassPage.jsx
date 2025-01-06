import React from "react";
import { useNavigate } from "react-router-dom";
import "./CookingClassPage.css";
import t1 from "../assets/galery/t1.jpg";
import t7 from "../assets/galery/t7.jpg";
import cheothung from "../assets/cheothung.jpg";

const tours = [
  {
    slug: "package-4-hours-class",
    title: "Walk in – 4 Hour Cooking Class ( Please come to our restaurant )",
    location: "Cam ha",
    time: "Starting time: 10:00 in the morning & 15:00 in the afternoon (3-4 hours)",
    price: "$20",
    image: t7,
  },
  {
    slug: "package-6-hours-class",
    title:
      "Package 6 Hours Class with minivan pick up/transfer from/to your hotel in Hoi An",
    location: "Cam ha",
    time: "Starting time: 08:00 in the morning & 15:00 in the afternoon (5-6 hours)",
    price: "$30",
    image: t1,
  },
  {
    slug: "bamboo-basket-boat-and-cooking",
    title:
      "Option 3 – Bamboo basket boat & Cooking at Tra Que Vegetable Village",
    location: "Cam ha",
    time: "Starting time: 08:00 in the morning & 15:00 in the afternoon (5-6 hours)",
    price: "$26",
    image: cheothung,
  },
];

const CookingClassPage = () => {
  const navigate = useNavigate();

  const handlenavigate = (slug) => {
    if (slug) {
      navigate(`/tour/${slug}`);
    }
  };

  return (
    <div className="container">
      <div className="cards">
        {tours.map((tour) => (
          <div
            className="card"
            onClick={() => handlenavigate(tour.slug)}
            key={tour.slug}
          >
            <img alt={tour.title} src={tour.image} />
            <div className="card-content">
              <h3>{tour.title}</h3>
              <div className="location">{tour.location}</div>
              <div className="time">
                <p>{tour.time}</p>
              </div>
              <div className="price" style={{ color: "#DCCA87" }}>
                {tour.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CookingClassPage;
