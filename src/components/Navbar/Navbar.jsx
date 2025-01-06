import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";
import { useNavigate, useLocation } from "react-router-dom";

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
  };

  const handleNavigateToCookingClass = () => {
    navigate("/cooking-class")
  }

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo" onClick={()=>navigate('/')}>
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
        <li className="p__opensans" onClick={() => handleNavigateToCookingClass()}>
          <p>Cooking Class</p>
        </li>
        <li className="p__opensans" onClick={() => handleNavigation("gallery")}>
          Gallery
        </li>
        <li className="p__opensans" onClick={() => handleNavigation("findus")}>
          <p>Find Us</p>
        </li>
      </ul>
      <div className="app__navbar-login" onClick={() => handleNavigation("book")}>
        <p className="p__opensans">
          Book Table
        </p>
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
              <li onClick={() => handleNavigation("home")}>Home</li>
              <li onClick={() => handleNavigation("about")}>About</li>
              <li onClick={() => handleNavigation("menu")}>Menu</li>
              <li onClick={() => handleNavigation("awards")}>Awards</li>
              <li onClick={() => handleNavigation("contact")}>Contact</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
