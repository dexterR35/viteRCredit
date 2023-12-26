import { useMemo } from "react";

import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import QuizButton from "../steps/Qbutton";
const Hero = ({
  listUser = [
    {
      name: "Aprobari",
      number: "2530+",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Eficienta",
      number: "100%",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Rata 80%",
      number: "Radieri",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl sm:h-[100vh] h-[95vh] mt-24 px-4 sm:px-8 mx-auto flex flex-col justify-around"
      id="hero"
    >
      <ScrollAnimationWrapper>
        <motion.div
          className="lg:grid grid-flow-row lg:grid-rows-1 lg:grid-cols-2 gap-8 py-6 sm:py-24 md:flex flex-col-reverse"
          variants={scrollAnimation}
        >
          <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1 sm:w-[80%] lg:w-[100%]">
            <h1 className="text-2xl sm:text-4xl xl:text-5xl font-bold text-black-600 leading-2 uppercase">
              Soluții de creditare personalizate
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              Servicii complete de creditare si crestea sanselor de aprobare
              oferite de o echipa profesionista in domeniul bancar financiar si
              non-bancar.
            </p>
            <QuizButton />
            {/* <ButtonPrimary addClass="hidden lg:block">
              Obtine Credit
            </ButtonPrimary> */}
          </div>
          <div className="flex w-full flex-col">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <img
                src="/assets/Illustration1.png"
                alt="VPN Illustrasi"
                className="w-[612px] h-[383px]"
              />
            </motion.div>
          </div>
        </motion.div>
        <motion.div variants={scrollAnimation}>
          {/* <ButtonPrimary addClass="lg:hidden block relative mx-auto mt-4">
            Obtine Credit
          </ButtonPrimary> */}
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="relative w-full flex">
        <ScrollAnimationWrapper className="rounded-lg w-full flex flex-row sm:grid sm:grid-flow-row sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 px-2 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 mx-auto sm:w-auto justify-start items-center sm:items-start sm:h-auto">
                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                  {/* <Image src={listUsers.icon} width={30} height={30} /> */}
                </div>
                <div className="flex flex-col">
                  <p className="sm:text-xl text-md text-black-600 font-bold">
                    {listUsers.number}
                  </p>
                  <p className="sm:text-lg text-sm text-black-500">
                    {listUsers.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
        <div
          className="absolute bg-black-600 opacity-5  roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
