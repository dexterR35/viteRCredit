// import Image from "next/image";
import { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import illustration2 from "/Icon/illustration3.png";
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
                Servicii de Consultantă
              </h3>
              <p className="my-2 text-black-500">
                Dacă te aflii in căutarea sprijinului necesar pentru a obține
                creditul dorit, echipa noastră de experți este aici pentru ați
                oferi asistență. Având o vastă experientă de peste 9 ani in
                acest domeniu, consultanții noștrii depun eforturi deosebite
                pentru a te ghida în obținerea rezultatelor dorite în cel mai
                eficient mod posibil.
              </p>
              <ul className="text-black-500 self-start list-inside flex flex-col gap-1 ml-3">
                {texts.map((texts, index) => (
                  <motion.li
                    className="relative circle-check custom-list flex justify-start items-center gap-2 cursor-pointer"
                    custom={{ duration: 2 + index }}
                    variants={scrollAnimation}
                    key={texts}
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                  >
                    <IoCheckmarkCircle className="w-[20px] h-[20px] text-green-500" />
                    {texts}
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
