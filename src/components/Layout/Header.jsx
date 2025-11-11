import { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import LogoOBT from "/Icon/logo_minimalist.png";
// import QuizButton from "../steps/Qbutton";

import {
  FcComments,
  FcMoneyTransfer,
  FcHome,
  FcContacts,
} from "react-icons/fc";
const Header = ({ setIsModalOpen }) => {
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
          "fixed top-0 w-full z-30 transition-all duration-300 " +
          (scrollActive 
            ? "bg-gradient-to-r from-white via-gray-50/30 to-white backdrop-blur-xl shadow-minimal py-0 border-b border-gray-100/50 " 
            : "bg-gradient-to-tr from-primary-50/30 via-white to-accent-50/20 backdrop-blur-sm py-4")
        }
      >
        <nav className="max-w-screen-2xl px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto grid grid-flow-col py-4 sm:py-5">
          <div className="col-start-1 col-end-2 flex items-center gap-3">
            <div className="relative flex-shrink-0">
              <img
                src={LogoOBT}
                alt="Obtine Credit Logo"
                className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
                style={{ filter: 'brightness(0.7)' }}
              />
            </div>
            <div className="hidden md:block h-5 w-px bg-gray-200"></div>
            <p className="text-sm font-display hidden md:block font-semibold tracking-tight text-gray-700 transition-colors duration-200">
              Obține Credit
            </p>
          </div>
          <ul className={`hidden lg:flex col-start-4 col-end-8 items-center justify-center font-medium gap-2 transition-colors duration-200 ${
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
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <div className="text-gray-800 mx-2 sm:mx-4 transition-all">
              <a
                href="tel:0786744694"
                className="flex items-center gap-2.5 font-semibold py-2.5 px-5 sm:px-6 text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 outline-none rounded-xl shadow-soft transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <FaPhoneAlt className="w-4 h-4"/>
                <span className="hidden sm:inline">Sună acum</span>
                <span className="sm:hidden">Sună</span>
              </a>
            </div>
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-2 sm:px-4 shadow-xl bg-gradient-to-r from-white via-gray-50/30 to-white backdrop-blur-xl border-t border-gray-100/50">
        <div className="sm:px-2">
          <ul className="flex w-full justify-between items-center text-gray-600">
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
                "mx-1 sm:mx-2 px-3 sm:px-4 py-3 flex flex-col items-center text-xs rounded-xl transition-all duration-300 " +
                (activeLink === "hero"
                  ? "bg-primary-50/80 text-primary-600 scale-105"
                  : "text-gray-600 hover:text-primary-600")
              }
            >
              <FcHome className="w-5 h-5 sm:w-6 sm:h-6 mb-1" />
              <span className="font-medium">Acasă</span>
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
                "mx-1 sm:mx-2 px-3 sm:px-4 py-3 flex flex-col items-center text-xs rounded-xl transition-all duration-300 " +
                (activeLink === "about"
                  ? "bg-primary-50/80 text-primary-600 scale-105"
                  : "text-gray-600 hover:text-primary-600")
              }
            >
              <FcComments className="w-5 h-5 sm:w-6 sm:h-6 mb-1" />
              <span className="font-medium">Despre Noi</span>
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
                "mx-1 sm:mx-2 px-3 sm:px-4 py-3 flex flex-col items-center text-xs rounded-xl transition-all duration-300 " +
                (activeLink === "services"
                  ? "bg-primary-50/80 text-primary-600 scale-105"
                  : "text-gray-600 hover:text-primary-600")
              }
            >
              <FcMoneyTransfer className="w-5 h-5 sm:w-6 sm:h-6 mb-1" />
              <span className="font-medium">Servicii</span>
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
                "mx-1 sm:mx-2 px-3 sm:px-4 py-3 flex flex-col items-center text-xs rounded-xl transition-all duration-300 " +
                (activeLink === "testimoni"
                  ? "bg-primary-50/80 text-primary-600 scale-105"
                  : "text-gray-600 hover:text-primary-600")
              }
            >
              <FcContacts className="w-5 h-5 sm:w-6 sm:h-6 mb-1" />
              <span className="font-medium">Contact</span>
            </LinkScroll>
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
