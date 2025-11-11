import { useMemo } from "react";

import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import QuizButton from "../steps/Qbutton";
import { IoPerson, IoBatteryFullSharp, IoLayersOutline } from "react-icons/io5";
import illustration from "/Icon/illustration7.webp";

const Hero = ({
  listUser = [
    {
      name: "Aprobari",
      number: "2530+",
      icon: IoPerson,
    },
    {
      name: "Eficienta",
      number: "100%",
      icon: IoBatteryFullSharp,
    },
    {
      name: "Rata 80%",
      number: "Radieri",
      icon: IoLayersOutline,
    },
  ],
  setIsModalOpen,
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="relative max-w-screen-xl xl:min-h-[95vh] min-h-[90vh] mt-10 sm:mt-20 px-4 sm:px-6 lg:px-8 mx-auto flex flex-col justify-center sm:justify-between section-padding overflow-hidden"
      id="hero"
    >
      {/* Enhanced Background gradient decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/80 via-white to-accent-50/80 -z-10"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary-400/30 to-primary-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-slow -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent-400/30 to-accent-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-slow -z-10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-200/20 to-accent-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>

      <ScrollAnimationWrapper>
        <motion.div
          className="lg:grid grid-flow-row lg:grid-rows-1 lg:grid-cols-2 gap-8 sm:gap-12 py-6 sm:py-8 lg:py-12 flex flex-col items-center"
          variants={scrollAnimation}
        >
          <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1 w-full lg:w-full z-10">
            <div className="inline-block mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-50 text-primary-700 rounded-full text-xs sm:text-sm font-semibold">
              Soluții financiare inteligente
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              Soluții de{" "}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                creditare
              </span>{" "}
              personalizate
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-2 sm:mt-4 mb-6 sm:mb-8 leading-relaxed max-w-2xl">
              Servicii complete de creditare și creșterea șanselor de aprobare oferite de o echipă profesionistă în domeniul bancar, financiar și non-bancar.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <QuizButton
                onClick={() => setIsModalOpen(true)}
                className="btn-sm text-sm sm:text-base w-full sm:w-auto"
                text="Obține Credit"
              />
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-md w-full sm:w-auto text-sm sm:text-base"
              >
                Află mai multe
              </button>
            </div>
          </div>

          <div className="flex w-full flex-col items-center justify-center relative mt-6 sm:mt-0">
            <div className="h-full w-full relative group">
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/40 via-primary-500/30 to-accent-400/40 rounded-3xl sm:rounded-[2rem] blur-2xl sm:blur-3xl opacity-30 sm:opacity-40 transform rotate-6 group-hover:rotate-12 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-300/30 to-primary-300/30 rounded-3xl sm:rounded-[2rem] blur-xl opacity-20 transform -rotate-6 group-hover:-rotate-12 transition-transform duration-700"></div>
              <img
                src={illustration}
                alt="Ilustrație creditare"
                className="relative w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] object-contain drop-shadow-2xl sm:drop-shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] z-10 transform group-hover:scale-105 transition-transform duration-500"
                style={{ filter: 'hue-rotate(45deg)' }}
              />
            </div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>

      {/* Enhanced Stats Section */}
      <div className="relative w-full flex mt-8 sm:mt-12 lg:mt-16">
        <ScrollAnimationWrapper className="rounded-2xl sm:rounded-3xl w-full flex flex-col sm:flex-row md:grid sm:grid-flow-row md:grid-cols-3 py-6 sm:py-8 md:py-10 bg-white/90 backdrop-blur-xl z-10 shadow-large border border-white/50 gap-4 sm:gap-0 overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-accent-50/50 pointer-events-none"></div>
          {listUser.map((listUsers, index) => (
            <motion.div
              className="relative flex items-center justify-center py-4 sm:py-5 md:py-6 px-4 sm:px-6 border-b sm:border-b-0 sm:border-r border-gray-200/50 last:border-b-0 last:border-r-0 hover:bg-gradient-to-br hover:from-primary-50/30 hover:to-accent-50/30 transition-all duration-300 group"
              key={index}
              variants={scrollAnimation}
            >
              <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 w-full">
                <div className="flex items-center justify-center bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl sm:rounded-3xl shadow-medium group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                  <listUsers.icon className="text-white w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9" />
                </div>
                <div className="flex flex-col text-left">
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent group-hover:from-primary-700 group-hover:to-accent-700 transition-all duration-300">
                    {listUsers.number}
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 font-semibold mt-1 group-hover:text-gray-800 transition-colors duration-300">
                    {listUsers.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Hero;
