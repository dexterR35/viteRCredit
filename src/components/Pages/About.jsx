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
    <div className="section-padding relative bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>

      <div className="container-modern">
        <div
          className="md:grid md:grid-flow-row md:grid-flow-col md:grid-cols-2 place-content-center md:items-center gap-12 lg:gap-16 flex flex-col-reverse"
          id="about"
        >
          <ScrollAnimationWrapper className="flex w-full justify-center md:justify-end">
            <motion.div
              className="h-full w-full p-2 sm:p-4 relative"
              variants={scrollAnimation}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-accent-200 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-30 sm:opacity-40 transform -rotate-6"></div>
                <img
                  src={illustration2}
                  alt="Servicii de consultanță financiară"
                  className="relative w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[450px] object-contain drop-shadow-xl sm:drop-shadow-2xl z-10 rounded-xl sm:rounded-2xl"
                />
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper>
            <motion.div
              className="flex flex-col items-start justify-center px-4 md:px-0 w-full leading-relaxed"
              variants={scrollAnimation}
            >
              <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-50 text-primary-700 rounded-full text-xs sm:text-sm font-semibold">
                Despre noi
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Servicii de{" "}
                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  Consultantă
                </span>
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Dacă te aflii în căutarea sprijinului necesar pentru a obține
                creditul dorit, echipa noastră de experți este aici pentru a-ți
                oferi asistență. Având o vastă experiență de peste 9 ani în
                acest domeniu, consultanții noștri depun eforturi deosebite
                pentru a te ghida în obținerea rezultatelor dorite în cel mai
                eficient mod posibil.
              </p>
              <ul className="text-gray-700 self-start list-none flex flex-col gap-3 w-full">
                {texts.map((text, index) => (
                  <motion.li
                    className="relative flex justify-start items-center gap-3 p-3 rounded-xl bg-gradient-to-br from-white to-gray-50"
                    custom={{ duration: 2 + index }}
                    variants={scrollAnimation}
                    key={text}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center shadow-medium">
                      <IoCheckmarkCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-base sm:text-lg font-medium">{text}</span>
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
