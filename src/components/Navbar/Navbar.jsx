import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineMail, MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";
import { useNavigate, useLocation } from "react-router-dom";
import { FiFacebook } from "react-icons/fi";
import { FaPhone, FaTripadvisor, FaWhatsapp } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [toggleMenu, setToggleMenu] = React.useState(false);

  const handleNavigation = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setToggleMenu(false);
  };

  const handleNavigationMobile = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setToggleMenu(false);
  };

  const handleNavigateToCookingClass = () => {
    navigate("/cooking-class");
  };

  const handleNavigateToCookingClassMenu = () => {
    navigate("/cooking-class");
    setToggleMenu(false);
  };

  const handleNavigateToHomeMobile = () => {
    navigate("/");
    setToggleMenu(false);
  };

  return (
    <div className="navbar__container">
      <div className="navbar__topbar">
        <div className="navbar__topbar-left">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <MdOutlineMail style={{ width: "20px", height: "20px" }} />
              <a href="mailto:maihomehoian@gmail.com">CONTACT</a>
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <FaPhone style={{ width: "15px", height: "15px" }} />
              <a href="mailto:maihomehoian@gmail.com">0905.392.324</a>
            </span>
          </div>
        </div>
        <div
          className="hide-on-mobile"
          style={{ display: "flex", gap: "10px" }}
        >
          <a
            href="https://www.facebook.com/profile.php?id=100048096265743"
            target="_blank"
          >
            <FiFacebook style={{ width: "15px", height: "15px" }} />
          </a>
          <a
            href="https://www.tripadvisor.com/Attraction_Review-g298082-d25436650-Reviews-Mai_Home_Hoi_An-Hoi_An_Quang_Nam_Province.html"
            target="_blank"
          >
            <FaTripadvisor style={{ width: "15px", height: "15px" }} />
          </a>
          <a
            href="https://www.google.com/maps/place/Mai+Home+Hoi+An+(Cooking+class+%26+Restaurant)/@15.9009375,108.3406875,15z/data=!4m6!3m5!1s0x31420d47aa449905:0xe2e0f2e75784722b!8m2!3d15.9009375!4d108.3406875!16s%2Fg%2F11hdplfl4r?sa=X&ved=2ahUKEwjjwqGujZiDAxWFslYBHY6uAxsQ_BJ6BAgJEAA&entry=tts"
            target="_blank"
          >
            <SiGooglemaps style={{ width: "15px", height: "15px" }} />
          </a>
          <a
            href="https://api.whatsapp.com/message/AKRVMO67IBI7H1?autoload=1&app_absent=0"
            target="_blank"
          >
            <FaWhatsapp style={{ width: "15px", height: "15px" }} />
          </a>
        </div>
      </div>

      <nav className="app__navbar">
        <div className="app__navbar-logo" onClick={() => navigate("/")}>
          <img src={images.maihomelogo} alt="app__logo" />
        </div>
        <ul className="app__navbar-links">
          <li className="p__opensans" onClick={() => navigate("/")}>
            Home
          </li>
          <li className="p__opensans" onClick={() => handleNavigation("about")}>
            About
          </li>
          <li className="p__opensans" onClick={() => handleNavigation("menu")}>
            Menu
          </li>
          <li
            className="p__opensans"
            onClick={() => handleNavigateToCookingClass()}
          >
            <p>Cooking Class</p>
          </li>
          <li
            className="p__opensans"
            onClick={() => handleNavigation("gallery")}
          >
            Gallery
          </li>
          <li
            className="p__opensans"
            onClick={() => handleNavigation("findus")}
          >
            <p>Find Us</p>
          </li>
        </ul>
        <div
          className="app__navbar-login"
          onClick={() => handleNavigation("book")}
        >
          <p className="p__opensans">Book Table</p>
        </div>
        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu
            color="#fff"
            fontSize={27}
            onClick={() => setToggleMenu(true)}
          />
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu
                fontSize={27}
                className="overlay__close"
                onClick={() => setToggleMenu(false)}
              />
              <ul className="app__navbar-smallscreen_links">
                <li
                  className="p__opensans"
                  onClick={handleNavigateToHomeMobile}
                >
                  Home
                </li>
                <li
                  className="p__opensans"
                  onClick={() => handleNavigationMobile("about")}
                >
                  About
                </li>
                <li
                  className="p__opensans"
                  onClick={() => handleNavigationMobile("menu")}
                >
                  Menu
                </li>
                <li
                  className="p__opensans"
                  onClick={() => handleNavigateToCookingClassMenu()}
                >
                  <p>Cooking Class</p>
                </li>
                <li
                  className="p__opensans"
                  onClick={() => handleNavigationMobile("gallery")}
                >
                  Gallery
                </li>
                <li
                  className="p__opensans"
                  onClick={() => handleNavigationMobile("findus")}
                >
                  <p>Find Us</p>
                </li>
                <li
                  className="p__opensans"
                  onClick={() => handleNavigation("book")}
                >
                  <p>Book Table</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
