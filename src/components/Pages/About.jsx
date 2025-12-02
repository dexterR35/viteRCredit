import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import illustration2 from "/Icon/hero2.png";
import { IoCheckmarkCircle } from "react-icons/io5";

const texts = [
  "Ajutor rapid, credit dorit.",
  "Experți în asistența financiară",
  "Soluții Eficiente, Succes Garantat.",
  "Transformăm visele în realitate.",
];

const Feature = () => {

  return (
    <div className="section-padding relative overflow-hidden" id="about">
      {/* Minimalist Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-50/30 to-primary-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-50/30 to-accent-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>

      <div className="container-modern">
        {/* Modern Layout: Image on Left, Text on Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-10 lg:mb-4">
          {/* Left Side - Image */}
          <ScrollAnimationWrapper className="flex w-full justify-center lg:justify-start relative order-2 lg:order-1">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100/30 to-primary-200/20 rounded-3xl blur-3xl opacity-40"></div>
              <img
                src={illustration2}
                alt="Servicii de consultanță financiară"
                className="relative w-full h-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] object-contain z-10 rounded-3xl"
                style={{ filter: 'hue-rotate(11deg)' }}
              />
            </div>
          </ScrollAnimationWrapper>

          {/* Right Side - Text Content */}
          <ScrollAnimationWrapper className="flex flex-col items-start justify-center w-full order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-primary-50/90 to-accent-50/70 text-primary-700 rounded-full text-sm font-semibold tracking-wide shadow-soft border border-primary-100/50">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
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
            </div>
          </ScrollAnimationWrapper>
        </div>

        {/* Features Grid - No Motion */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {texts.map((text) => (
            <li
              className="relative flex justify-start items-center gap-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100/80 shadow-soft hover:shadow-large hover:border-primary-200/60 hover:bg-gradient-to-br hover:from-white hover:to-primary-50/30 transition-all duration-500 group list-none"
              key={text}
            >
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400/30 to-accent-400/30 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-medium">
                  <IoCheckmarkCircle className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-500">{text}</span>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
