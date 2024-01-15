// import Image from "next/image";
import { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import illustration2 from "../../assets/Illustration2.png";
const features = [
  "Ajutor rapid, credit dorit.",
  "Experti in asistenta financiara",
  "Supercharged VPN",
  "No specific time limits.",
];

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="sm:py-8 py-0 relative">
      <div className="max-w-screen-xl mx-auto">
        <div
          className="md:grid md:grid-flow-row md:grid-flow-col md:grid-cols-1 md:grid-cols-2 my-12 flex flex-col-reverse"
          id="about"
        >
          <ScrollAnimationWrapper className="flex w-full justify-end">
            <motion.div
              className="h-full w-full p-4"
              variants={scrollAnimation}
            >
              <img
                src={illustration2}
                alt="test"
                className="w-[520px] h-[420px] object-contain"
              />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div
              className="flex flex-col items-center md:items-end justify-center px-5 md:px-0 ml-auto w-full lg:w-9/12 leading-relaxed"
              variants={scrollAnimation}
            >
              <h3 className="text-3xl lg:text-5xl font-semibold text-black-600">
                Servicii de Consultanta
              </h3>
              <p className="my-2 text-black-500">
                Daca te aflii in cautarea sprijinului necesar pentru a obtine
                creditul dorit, echipa noastra de experti este aici pentru ati
                oferi asistenta. Avand o vasta experienta de peste 9 ani in
                acest domeniu, consultantii nostrii depun eforturi deosebite
                pentru ate ghida in obtinerea rezultatelor dorite in cel mai
                eficient mod posibil.
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
    </div>
  );
};

export default Feature;
