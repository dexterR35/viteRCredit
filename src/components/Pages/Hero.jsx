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
      className="relative max-w-screen-xl xl:min-h-[95vh] min-h-[90vh] mt-20 px-4 sm:px-6 lg:px-8 mx-auto flex flex-col justify-center sm:justify-between section-padding overflow-hidden"
      id="hero"
    >
      {/* Background gradient decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 opacity-50 -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow -z-10"></div>

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
            <div className="h-full w-full relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-accent-200 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-20 sm:opacity-30 transform rotate-6"></div>
              <img
                src={illustration}
                alt="Ilustrație creditare"
                className="relative w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[450px] object-contain drop-shadow-xl sm:drop-shadow-2xl z-10"
              />
            </div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>

      {/* Stats Section */}
      <div className="relative w-full flex mt-8 sm:mt-12 lg:mt-16">
        <ScrollAnimationWrapper className="rounded-xl sm:rounded-2xl w-full flex flex-col sm:flex-row md:grid sm:grid-flow-row md:grid-cols-3 py-4 sm:py-6 md:py-8 bg-white/80 backdrop-blur-md z-10 shadow-medium sm:shadow-large border border-gray-100 gap-4 sm:gap-0">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-center py-3 sm:py-4 md:py-6 px-4 sm:px-6 border-b sm:border-b-0 sm:border-r border-gray-200 last:border-b-0 last:border-r-0"
              key={index}
              variants={scrollAnimation}
            >
              <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 w-full">
                <div className="flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl shadow-medium">
                  <listUsers.icon className="text-white w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </div>
                <div className="flex flex-col text-left">
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 font-bold">
                    {listUsers.number}
                  </p>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 font-medium mt-0.5 sm:mt-1">
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
