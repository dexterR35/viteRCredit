import { useMemo } from "react";

import Testimoni from "./Testimoni";

import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import cardImg from "/Icon/credit.png";
import cardImg2 from "/Icon/ref.png";
import cardImg3 from "/Icon/business-report.png";
import cardImg4 from "/Icon/finance.png";
import cardImg6 from "/Icon/car2.png";
import cardImg7 from "/Icon/house.png";

import QuizButton from "../steps/Qbutton";

const Services = ({ setIsModalOpen }) => {
  const dataCards = [
    {
      img: cardImg,
      btnTitle: "Obține Credit",
      title: "Credite de nevoi personale",
      description:
        "Obțineți creditul de nevoi personale de care aveți nevoie cu ușurință și rapid. Echipa noastră de experți vă stă la dispoziție pentru a vă oferi soluții financiare personalizate, adaptate nevoilor dumneavoastră. Simplu, eficient, și fără complicații.",
    },
    {
      img: cardImg2,
      btnTitle: "Aplică aici",
      title: "Refinanțări",
      description:
        "Optați pentru refinanțare cu încredere. Echipa noastră vă asigură soluții personalizate pentru a consolida și eficientiza datoriile dvs. Există oportunități noi pentru un viitor financiar mai stabil.",
    },
    {
      img: cardImg7,
      btnTitle: "Completează",
      title: "Credite Imobiliare",
      description:
        "Asigurați-vă viitorul cu un credit imobiliar adaptat nevoilor dumneavoastră. Echipa noastră vă ghidează pas cu pas în procesul de obținere a unui credit pentru casa visurilor voastre. Investiția în confortul dumneavoastră începe aici.",
    },
    {
      img: cardImg3,
      btnTitle: "Află mai multe",
      title: "Stergere din biroul de credit",
      description:
        "Asigurați-vă un start proaspăt eliminând datele negative din biroul de credit. Echipa noastră vă oferă suport specializat pentru a remedia situațiile financiare nefericite și a vă restabili un profil de credit pozitiv.",
    },
    {
      img: cardImg4,
      btnTitle: "Aplică aici",
      title: "Credite IMM-uri",
      description:
        "Optați pentru creditele pe firmă pentru a-ți dezvolta afacerea fără a-ți utiliza propriile resurse financiare. Echipa noastră vă oferă soluții personalizate pentru a obține finanțarea necesară și a consolida succesul în mediul de afaceri.",
    },
    {
      img: cardImg6,
      btnTitle: "Completează",
      title: "Leasing Auto",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores perspiciatis ipsum repellendus aspernatur iusto numquam aliquid cumque optio illo! Temporibus",
    },
  ];
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="w-full sm:py-4 py-0" id="services">
      <div className="max-w-screen-2xl px-4 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full mt-14">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="uppercase text-2xl lg:text-4xl font-semibold text-gray-700 mx-auto"
            >
              Găsim cele mai bune soluții pentru tine
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="mx-auto mb-6 mt-2 w-[95%] md:w-1/3 text-gray-700"
            >
              Când planurile tale nu suportă amânare, echipa Obține Credit te
              ajută să le pui în aplicare!
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="sm:grid sm:grid-cols-3 sm:grid-flow-row gap-y-14 py-4 lg:py-8 sm:px-0 lg:px-20 flex flex-col gap-4">
            {dataCards.map((card, index) => (
              <ScrollAnimationWrapper
                className="flex justify-center"
                key={index}
              >
                <motion.div
                  variants={scrollAnimation}
                  className="bg-white cursor-pointer flex flex-col rounded-md pt-2 pb-4 px-4 xl:px-5 min-w-96 h-74 shadow-sm"
                  whileHover={{
                    scale: 1.02,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <div className="p-2 bg-gray-200 lg:p-0 my-2 flex flex-row items-center w-full justify-around rounded-md h-20">
                    <img
                      src={card.img}
                      alt="Free Plan"
                      className="w-14 h-14 object-contain ml-3 mr-[-10px]"
                    />
                    <p className="text-[20px] md:text-xl text-gray-700  capitalize my-2 sm:my-2 flex-1 px-10 font-[600]">
                      {card.title}
                    </p>
                  </div>
                  <div className="flex flex-col w-full flex-none h-32 mt-2">
                    <p className="text-sm text-gray-700 text-start">
                      {card.description}
                    </p>
                  </div>
                  <QuizButton
                    onClick={() => setIsModalOpen(true)}
                    className="px-5 mt-2 font-medium bg-primary rounded-md text-white p-2 place-self-end w-48"
                    text={card.btnTitle}
                  />
                </motion.div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>

        <div className="flex flex-col w-full my-10" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className=" uppercase text-2xl sm:text-4xl font-semibold text-gray-700 leading-normal w-9/12 sm: lg:w-5/12 mx-auto"
            >
              Soluții Constructive{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-12 md:mt-2 w-10/12 sm:w-7/12 lg:w-6/12 text-lg f text-gray-700"
            >
              Eficient, Rapid, Reușită
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col pt-2">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="bg-white relative sm:top-[100px] top-[20px] rounded-xl py-8 sm:py-14 px-4 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-gray-700 text-xl sm:text-2xl lg:text-4xl leading-relaxed font-medium mb-2">
                    Descoperă secretele <br />
                    financiare
                  </h5>
                  <p>
                    {" "}
                    Abonează-te pentru sfaturi exclusive de la consultanți.
                  </p>
                  <p className="text-[13px] mt-1 flex gap-1 text-gray-600">
                    <span>#Credite</span> <span>#ConsultanțăFinanciară</span>{" "}
                    <span> #EducațieFinanciară</span>
                  </p>
                </div>
                <button className="btn-sm">Intră online</button>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Services;
