// import Image from "next/image";
import { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import illustration2 from "/Icon/illustration6.webp";
import { IoCheckmarkCircle } from "react-icons/io5";
const texts = [
  "Ajutor rapid, credit dorit.",
  "Experți în asistența financiară",
  "Soluții Eficiente, Succes Garantat.",
  "Transformăm visele în realitate.",
  "Claritate și Suport în Finanțe.",
];

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="section-padding relative overflow-hidden">
      {/* Minimalist Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-50/30 to-primary-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-50/30 to-accent-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>

      <div className="container-modern">
        <div
          className="md:grid md:grid-flow-row md:grid-flow-col md:grid-cols-2 place-content-center md:items-center gap-12 lg:gap-16 flex flex-col-reverse"
          id="about"
        >
          <ScrollAnimationWrapper className="flex w-full justify-center md:justify-end">
            <motion.div
              className="h-full w-full p-2 sm:p-4 relative group"
              variants={scrollAnimation}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100/30 to-primary-200/20 rounded-3xl blur-3xl opacity-40 transform group-hover:opacity-50 transition-opacity duration-700"></div>
                <img
                  src={illustration2}
                  alt="Servicii de consultanță financiară"
                  className="relative w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] object-contain z-10 rounded-2xl sm:rounded-3xl transform group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper>
            <motion.div
              className="flex flex-col items-start justify-center px-4 md:px-0 w-full leading-relaxed"
              variants={scrollAnimation}
            >
              <div className="inline-block mb-6 px-4 py-2 bg-primary-50/80 text-primary-700 rounded-full text-sm font-medium tracking-wide">
                Despre noi
              </div>
              <h3 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-[1.05] text-balance">
                Servicii de{" "}
                <span className="bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 bg-clip-text text-transparent">
                  Consultantă
                </span>
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 leading-relaxed text-balance">
                Dacă te aflii în căutarea sprijinului necesar pentru a obține
                creditul dorit, echipa noastră de experți este aici pentru a-ți
                oferi asistență. Având o vastă experiență de peste 9 ani în
                acest domeniu, consultanții noștri depun eforturi deosebite
                pentru a te ghida în obținerea rezultatelor dorite în cel mai
                eficient mod posibil.
              </p>
              <ul className="text-gray-700 self-start list-none flex flex-col gap-4 w-full">
                {texts.map((text, index) => (
                  <motion.li
                    className="relative flex justify-start items-center gap-4 p-5 rounded-2xl bg-gray-50/50 backdrop-blur-sm border border-gray-100/60 shadow-soft hover:shadow-medium hover:border-gray-200/80 hover:bg-gray-50 transition-all duration-500 group"
                    custom={{ duration: 2 + index }}
                    variants={scrollAnimation}
                    key={text}
                  >
                    <div className="flex-shrink-0 w-11 h-11 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-medium group-hover:scale-105 transition-all duration-500">
                      <IoCheckmarkCircle className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-base sm:text-lg font-medium text-gray-800 group-hover:text-gray-900 transition-colors duration-500">{text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Feature;
