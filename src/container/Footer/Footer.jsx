import React from "react";
import { FiFacebook } from "react-icons/fi";
import { FaTripadvisor } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="book">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Cam Ha, Hoi An, Quang Nam 560000, Vietnam</p>
        <p className="p__opensans">0905.392.324</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.maihomelogo} alt="footer_logo" />
        <p className="p__opensans">
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <a
            href="https://www.facebook.com/profile.php?id=100048096265743"
            target="_blank"
          >
            <FiFacebook />
          </a>
          <a
            href="https://www.tripadvisor.com/Attraction_Review-g298082-d25436650-Reviews-Mai_Home_Hoi_An-Hoi_An_Quang_Nam_Province.html"
            target="_blank"
          >
            <FaTripadvisor />
          </a>
          <a
            href="https://www.google.com/maps/place/Mai+Home+Hoi+An+(Cooking+class+%26+Restaurant)/@15.9009375,108.3406875,15z/data=!4m6!3m5!1s0x31420d47aa449905:0xe2e0f2e75784722b!8m2!3d15.9009375!4d108.3406875!16s%2Fg%2F11hdplfl4r?sa=X&ved=2ahUKEwjjwqGujZiDAxWFslYBHY6uAxsQ_BJ6BAgJEAA&entry=tts"
            target="_blank"
          >
            <SiGooglemaps />
          </a>
          <a
            href="https://api.whatsapp.com/message/AKRVMO67IBI7H1?autoload=1&app_absent=0"
            target="_blank"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.1552110993975!2d108.33811257484818!3d15.900937484754417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420d47aa449905%3A0xe2e0f2e75784722b!2sMai%20Home%20Hoi%20An%20(Cooking%20class%20%26%20Restaurant)!5e0!3m2!1svi!2s!4v1734017558755!5m2!1svi!2s"
          width="320"
          height="280"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2025 Mai Home Hoi An All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
