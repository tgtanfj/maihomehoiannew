import React from "react";
import "./CookingClassPage.css";
import t1 from "../assets/galery/t1.jpg";
import t7 from "../assets/galery/t7.jpg";

const CookingClassPage = () => {
  return (
    <div class="container">
      <div class="cards">
        <div class="card">
          <img
            alt="Cooking class in Tra Que Village with market and garden tour"
            src={t7}
          />
          <div class="card-content">
            <h3>
              Walk in – 4 Hour Cooking Class ( Please come to our restaurant )
            </h3>
            <div class="location">Cam ha</div>
            <div class="time">
              <p>
                Starting time: 10:00 in the morning & 15:00 in the afternoon
                (3-4 hours)
              </p>
            </div>
            <div class="price" style={{ color: "#DCCA87" }}>
              $20
            </div>
          </div>
        </div>
        <div class="card">
          <img
            alt="Bamboo basket boat and cooking at Tra Que"
            height="400"
            src={t1}
            width="600"
          />
          <div
            class="card-content"
            style={{ backgroundColor: "#333", color: "white" }}
          >
            <h3 style={{ color: "white" }}>
              Package 6 Hours Class with minivan pick up/transfer from/to your
              hotel in Hoi An
            </h3>
            <div class="location">Cam ha</div>
            <div class="time" style={{ color: "#ccc" }}>
              <p>
                Starting time: 08:00 in the morning & 15:00 in the afternoon
                (5-6 hours)
              </p>
            </div>
            <div class="price" style={{ color: "#DCCA87" }}>
              $30
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookingClassPage;
