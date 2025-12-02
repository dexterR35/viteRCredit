import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import LogoOBT from "/Icon/logo_minimalist.png";
import QuizButton from "../steps/Qbutton";

const Header = () => {
  const navigate = useNavigate();
  
  const handleFormClick = () => {
    navigate("/formular");
  };
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 left-0 right-0 w-full max-w-full z-30 transition-all duration-300 " +
          (scrollActive 
            ? "bg-gradient-to-r from-white via-gray-50/30 to-white backdrop-blur-xl shadow-minimal py-0 border-b border-gray-100/50 " 
            : "bg-gradient-to-tr from-primary-50/30 via-white to-accent-50/20 backdrop-blur-sm py-3 sm:py-4")
        }
      >
        <nav className="max-w-screen-2xl px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto flex items-center justify-between py-3 sm:py-4 lg:py-5">
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <div className="relative flex-shrink-0">
              <img
                src={LogoOBT}
                alt="Obtine Credit Logo"
                className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 object-contain"
                style={{ filter: 'brightness(0.7)' }}
              />
            </div>
            <div className="hidden md:block h-5 w-px bg-gray-200"></div>
            <p className="text-xs sm:text-sm font-display hidden md:block font-semibold tracking-tight text-gray-700 transition-colors duration-200">
              Obține Credit
            </p>
          </div>
          <ul className={`hidden lg:flex items-center justify-center font-medium gap-2 transition-colors duration-200 flex-1 ${
            scrollActive ? "text-gray-600" : "text-gray-700"
          }`}>
            <LinkScroll
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              onSetActive={() => {
                setActiveLink("hero");
              }}
              className={
                "px-5 py-2.5 mx-0.5 cursor-pointer inline-block relative rounded-xl transition-all duration-300 " +
                (activeLink === "hero"
                  ? " text-primary-600 bg-primary-50/80 font-semibold"
                  : " text-gray-600 hover:text-primary-600 hover:bg-gray-50/50")
              }
            >
              Acasă
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "px-5 py-2.5 mx-0.5 cursor-pointer inline-block relative rounded-xl transition-all duration-300 " +
                (activeLink === "about"
                  ? " text-primary-600 bg-primary-50/80 font-semibold"
                  : " text-gray-600 hover:text-primary-600 hover:bg-gray-50/50")
              }
            >
              Despre noi
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              onSetActive={() => {
                setActiveLink("services");
              }}
              className={
                "px-5 py-2.5 mx-0.5 cursor-pointer inline-block relative rounded-xl transition-all duration-300 " +
                (activeLink === "services"
                  ? " text-primary-600 bg-primary-50/80 font-semibold"
                  : " text-gray-600 hover:text-primary-600 hover:bg-gray-50/50")
              }
            >
              Servicii
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="testimoni"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              onSetActive={() => {
                setActiveLink("testimoni");
              }}
              className={
                "px-5 py-2.5 mx-0.5 cursor-pointer inline-block relative rounded-xl transition-all duration-300 " +
                (activeLink === "testimoni"
                  ? " text-primary-600 bg-primary-50/80 font-semibold"
                  : " text-gray-600 hover:text-primary-600 hover:bg-gray-50/50")
              }
            >
              Testimonial
            </LinkScroll>
          </ul>
          <div className="font-medium flex justify-end items-center flex-shrink-0 gap-2 sm:gap-3">
            <QuizButton
              onClick={handleFormClick}
              className="btn-sm text-xs sm:text-sm hidden sm:inline-flex shadow-medium"
              text="Obține Credit"
            />
            <a
              href="tel:0786744694"
              className="flex items-center gap-1.5 sm:gap-2.5 font-semibold py-2 px-3 sm:py-2.5 sm:px-5 lg:px-6 text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 outline-none rounded-lg sm:rounded-xl shadow-soft transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] text-xs sm:text-sm"
            >
              <FaPhoneAlt className="w-3.5 h-3.5 sm:w-4 sm:h-4"/>
              <span className="hidden sm:inline">Sună acum</span>
              <span className="sm:hidden">Sună</span>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
