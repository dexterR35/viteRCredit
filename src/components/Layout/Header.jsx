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
          "fixed top-0 w-full z-30 bg-gray-200 transition-all " +
          (scrollActive ? "shadow-md pt-0" : "pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <img
              src={LogoOBT}
              alt="Your logo Here"
              className="w-[50px] h-[50px] object-contain"
            />
            <p className="text-sm hidden text-gray-700 uppercase md:block font-bold">
              Obtine Credit
            </p>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-gray-800 items-center justify-center font-medium">
            <LinkScroll
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              duration={800}
              onSetActive={() => {
                setActiveLink("hero");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "hero"
                  ? " text-primary animation-active"
                  : " text-gray-800 hover:text-primary")
              }
            >
              Acasă
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={800}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "about"
                  ? " text-primary animation-active"
                  : " text-gray-800 hover:text-primary")
              }
            >
              Despre noi
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              duration={800}
              onSetActive={() => {
                setActiveLink("services");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "services"
                  ? " text-primary animation-active"
                  : " text-gray-800 hover:text-primary")
              }
            >
              Servicii
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="testimoni"
              spy={true}
              smooth={true}
              duration={800}
              onSetActive={() => {
                setActiveLink("testimoni");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "testimoni"
                  ? " text-primary animation-active"
                  : " text-gray-800 hover:text-primary")
              }
            >
              Testimonial
            </LinkScroll>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <div className="text-gray-800 mx-2 sm:mx-4 capitalize tracking-wide transition-all">
              <a
                href="tel:0786744694"
                className="flex items-center gap-2 font-medium tracking-wide py-3 px-5 sm:px-8  text-white bg-primary outline-none rounded-lg capitalize"
              >
                <FaPhoneAlt className="w-5 h-5 text-black" color="white"/>
                Sună acum
              </a>
              {/* <QuizButton
                onClick={() => setIsModalOpen(true)}
                bg-primary
                className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-primary text-primary bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-primary hover:text-white transition-all hover:shadow-orange"
                text="Cere Oferta"
              /> */}
            </div>
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t bg-white">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-gray-800">
            <LinkScroll
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              duration={800}
              onSetActive={() => {
                setActiveLink("hero");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "hero"
                  ? "  border-primary text-primary"
                  : " border-transparent")
              }
            >
              <FcHome className="w-6 h-6" />
              Acasă
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={800}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "about"
                  ? "  border-primary text-primary"
                  : " border-transparent ")
              }
            >
              <FcComments className="w-6 h-6" />
              Despre Noi
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              duration={800}
              onSetActive={() => {
                setActiveLink("services");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "services"
                  ? "  border-primary text-primary"
                  : " border-transparent ")
              }
            >
              <FcMoneyTransfer className="w-6 h-6" />
              Servicii
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="testimoni"
              spy={true}
              smooth={true}
              duration={800}
              onSetActive={() => {
                setActiveLink("testimoni");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "testimoni"
                  ? "  border-primary text-primary"
                  : " border-transparent ")
              }
            >
              <FcContacts className="w-6 h-6" />
              Contact
            </LinkScroll>
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
