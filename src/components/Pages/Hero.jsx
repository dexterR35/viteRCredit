import { useNavigate } from "react-router-dom";

import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import QuizButton from "../steps/Qbutton";
import { IoPerson, IoBatteryFullSharp, IoLayersOutline } from "react-icons/io5";
import illustration from "/Icon/hero.png";

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
}) => {
  const navigate = useNavigate();
  
  const handleFormClick = () => {
    navigate("/formular");
  };

  return (
    <div
      className="relative max-w-screen-2xl xl:min-h-[95vh] min-h-[85vh] pt-20 sm:pt-24 lg:pt-28 px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto flex flex-col justify-center sm:justify-between section-padding"
      id="hero"
    >
      {/* Minimalist Background decoration */}
      {/* <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-100/20 to-primary-200/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-100/20 to-accent-200/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div> */}

      <ScrollAnimationWrapper>
        <div className="lg:grid grid-flow-row lg:grid-rows-1 lg:grid-cols-2 gap-8 sm:gap-12 py-6 sm:py-8 lg:py-12 flex flex-col items-center">
          <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1 w-full lg:w-full z-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-primary-50/90 to-accent-50/70 text-primary-700 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-soft border-2 border-primary-100/50">
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              Soluții financiare inteligente
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-gray-900 leading-[1.05] mb-4 sm:mb-6 lg:mb-8 text-balance">
              Soluții de{" "}
              <span className="bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 bg-clip-text text-transparent">
                creditare
              </span>{" "}
              personalizate
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mt-2 sm:mt-4 mb-6 sm:mb-8 lg:mb-10 leading-relaxed max-w-2xl text-balance">
              Servicii complete de creditare și creșterea șanselor de aprobare oferite de o echipă profesionistă în domeniul bancar, financiar și non-bancar.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <QuizButton
                onClick={handleFormClick}
                className="btn-sm text-sm sm:text-base w-full sm:w-auto shadow-medium"
                text="Obține Credit"
              />
              <button
                onClick={handleFormClick}
                className="w-full sm:w-auto text-sm sm:text-base border-2 border-primary-500 bg-white text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Află mai multe
              </button>
            </div>
          </div>

          <div className="flex w-full flex-col items-center justify-center relative mt-6 sm:mt-0">
            <div className="h-full w-full relative group">
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100/30 to-primary-200/20 rounded-3xl blur-3xl opacity-40 "></div>
              <img
                src={illustration}
                alt="Ilustrație creditare"
                className="relative w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] object-contain z-10"
                style={{ filter: 'hue-rotate(360deg)' }}
              />
            </div>
          </div>
        </div>
      </ScrollAnimationWrapper>

      {/* Modern Stats Section */}
      <div className="relative w-full flex mt-8 sm:mt-12 lg:mt-10">
        <ScrollAnimationWrapper className="rounded-2xl sm:rounded-3xl w-full flex flex-col sm:flex-row md:grid sm:grid-flow-row md:grid-cols-3 py-6 sm:py-8 md:py-10 lg:py-12 bg-white/80 backdrop-blur-xl z-10 shadow-medium border-2 border-gray-200/60 gap-0 overflow-hidden relative">
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-100/20 via-transparent to-accent-100/20 pointer-events-none"></div>
          {listUser.map((listUsers, index) => (
            <div
              className="relative flex items-center justify-center py-4 sm:py-5 md:py-6 px-4 sm:px-6 md:px-8 border-b-2 sm:border-b-0 sm:border-r-2 border-gray-200/60 last:border-b-0 last:border-r-0 hover:bg-gradient-to-br group"
              key={index}
            >
              <div className="flex flex-row items-center justify-center gap-4 sm:gap-5 md:gap-6 w-full ">
                <div className="relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400/30 to-accent-400/30 rounded-2xl blur-lg opacity-0  "></div>
                  <div className="relative flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-700 w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-2xl shadow-medium">
                    <listUsers.icon className="text-white w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                </div>
                <div className="flex flex-col text-left">
                  <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 bg-clip-text text-transparent transition-all duration-500">
                    {listUsers.number}
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 font-semibold mt-1.5 group-hover:text-primary-600 transition-colors duration-500">
                    {listUsers.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Hero;
