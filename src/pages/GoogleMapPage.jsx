import React, { useEffect } from "react";

const GoogleMapPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
    document.title = "Find Us | Mai Home Hoi An";
  }, []);
  return (
    <>
      <div style={{ width: "100%", height: "100vh" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15348.620843234146!2d108.3406875!3d15.9009375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420d47aa449905%3A0xe2e0f2e75784722b!2sMai%20Home%20Hoi%20An%20(Cooking%20class%20%26%20Restaurant)!5e0!3m2!1svi!2s!4v1734022517276!5m2!1svi!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div
        style={{ width: "100%", backgroundColor: "black", height: "50px" }}
      ></div>
    </>
  );
};

export default GoogleMapPage;
