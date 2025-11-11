import { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import LogoOBT from "/logo/logos.png";
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
            ? "glass-effect shadow-large py-0" 
            : "bg-transparent py-4")
        }
      >
        <nav className="max-w-screen-xl px-4 sm:px-6 lg:px-8 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center gap-3">
            <div className="relative">
              <img
                src={LogoOBT}
                alt="Obtine Credit Logo"
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain drop-shadow-sm"
              />
            </div>
            <p className="text-sm hidden text-gray-800 uppercase md:block font-bold tracking-tight">
              Obtine Credit
            </p>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-gray-700 items-center justify-center font-medium gap-1">
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
                "px-4 py-2 mx-1 cursor-pointer inline-block relative rounded-lg transition-all duration-200 " +
                (activeLink === "hero"
                  ? " text-primary-600 bg-primary-50 font-semibold"
                  : " text-gray-700")
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
                "px-4 py-2 mx-1 cursor-pointer inline-block relative rounded-lg transition-all duration-200 " +
                (activeLink === "about"
                  ? " text-primary-600 bg-primary-50 font-semibold"
                  : " text-gray-700")
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
                "px-4 py-2 mx-1 cursor-pointer inline-block relative rounded-lg transition-all duration-200 " +
                (activeLink === "services"
                  ? " text-primary-600 bg-primary-50 font-semibold"
                  : " text-gray-700")
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
                "px-4 py-2 mx-1 cursor-pointer inline-block relative rounded-lg transition-all duration-200 " +
                (activeLink === "testimoni"
                  ? " text-primary-600 bg-primary-50 font-semibold"
                  : " text-gray-700")
              }
            >
              Testimonial
            </LinkScroll>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <div className="text-gray-800 mx-2 sm:mx-4 capitalize tracking-wide transition-all">
              <a
                href="tel:0786744694"
                className="flex items-center gap-2 font-semibold tracking-wide py-3 px-5 sm:px-6 text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 outline-none rounded-xl capitalize shadow-medium hover:shadow-glow transition-all duration-300 transform hover:scale-105 active:scale-95"
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
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-2 sm:px-4 shadow-large glass-effect border-t border-gray-200">
        <div className="sm:px-2">
          <ul className="flex w-full justify-between items-center text-gray-700">
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
                "mx-1 sm:mx-2 px-3 sm:px-4 py-3 flex flex-col items-center text-xs rounded-xl transition-all duration-200 " +
                (activeLink === "hero"
                  ? "bg-primary-50 text-primary-600 scale-105"
                  : "text-gray-600")
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
                "mx-1 sm:mx-2 px-3 sm:px-4 py-3 flex flex-col items-center text-xs rounded-xl transition-all duration-200 " +
                (activeLink === "about"
                  ? "bg-primary-50 text-primary-600 scale-105"
                  : "text-gray-600")
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
                "mx-1 sm:mx-2 px-3 sm:px-4 py-3 flex flex-col items-center text-xs rounded-xl transition-all duration-200 " +
                (activeLink === "services"
                  ? "bg-primary-50 text-primary-600 scale-105"
                  : "text-gray-600")
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
                "mx-1 sm:mx-2 px-3 sm:px-4 py-3 flex flex-col items-center text-xs rounded-xl transition-all duration-200 " +
                (activeLink === "testimoni"
                  ? "bg-primary-50 text-primary-600 scale-105"
                  : "text-gray-600")
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
