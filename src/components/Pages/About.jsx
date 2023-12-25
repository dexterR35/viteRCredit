// import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  "Ajutor rapid, credit dorit.",
  "Experti in asistenta financiara",
  "Supercharged VPN",
  "No specific time limits.",
];

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-3 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            {/* <Image
              src="/assets/Illustration2.png"
              alt="test"
              height={414}
              width={508}
            /> */}
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12"
            variants={scrollAnimation}
          >
            <h3 className="text-3xl lg:text-5xl font-medium leading-relaxed text-black-600">
              Servicii de Consultanta
            </h3>
            <p className="my-2 text-black-500">
              Daca te aflii in cautarea sprijinului necesar pentru a obtine
              creditul dorit, echipa noastra de experti este aici pentru ati
              oferi asistenta. Avand o vasta experienta de peste 9 ani in acest
              domeniu, consultantii nostrii depun eforturi deosebite pentru ate
              ghida in obtinerea rezultatelor dorite in cel mai eficient mod
              posibil.
            </p>
            <ul className="text-black-500 self-start list-inside ml-8">
              {features.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
