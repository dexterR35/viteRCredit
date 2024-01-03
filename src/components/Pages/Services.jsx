import React, { useMemo } from "react";

import Testimoni from "./Testimoni";
// import ButtonPrimary from "./misc/ButtonPrimary";
// import ButtonOutline from "./misc/ButtonOutline.";
// import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import cardImg from "../../assets/Free.png";
const Services = () => {
  const dataCards = [
    {
      img: cardImg,
      imgSecond: "test",
      title: "Credite de nevoi personale",
      description:
        "Obțineți creditul de nevoi personale de care aveți nevoie cu ușurință și rapid. Echipa noastră de experți vă stă la dispoziție pentru a vă oferi soluții financiare personalizate, adaptate nevoilor dumneavoastră. Simplu, eficient, și fără complicații.",
    },
    {
      img: cardImg,
      imgSecond: "test",
      title: "Refinantari",
      description:
        "Optați pentru refinanțare cu încredere. Echipa noastră vă asigură soluții personalizate pentru a consolida și eficientiza datoriile dvs. Există oportunități noi pentru un viitor financiar mai stabil.",
    },
    {
      img: cardImg,

      imgSecond: "test",
      title: "Credite Imobiliare",
      description:
        "Asigurați-vă viitorul cu un credit imobiliar adaptat nevoilor dumneavoastră. Echipa noastră vă ghidează pas cu pas în procesul de obținere a unui credit pentru casa visurilor voastre. Investiția în confortul dumneavoastră începe aici.",
    },
    {
      img: cardImg,
      imgSecond: "test",
      title: "Stergere din biroul de credit",
      description:
        "Asigurați-vă un start proaspăt eliminând datele negative din biroul de credit. Echipa noastră vă oferă suport specializat pentru a remedia situațiile financiare nefericite și a vă restabili un profil de credit pozitiv.",
    },
    {
      img: cardImg,
      imgSecond: "test",
      title: "credite IMM-uri",
      description:
        "Optați pentru creditele pe firmă pentru a-ți dezvolta afacerea fără a-ți utiliza propriile resurse financiare. Echipa noastră vă oferă soluții personalizate pentru a obține finanțarea necesară și a consolida succesul în mediul de afaceri.",
    },
    {
      img: cardImg,
      imgSecond: "test",
      title: "Leasing Auto",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores perspiciatis ipsum repellendus aspernatur iusto numquam aliquid cumque optio illo! Temporibus",
    },
  ];
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="w-full py-4" id="services">
      <div className="max-w-screen-2xl px-4 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full mt-14">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="uppercase text-2xl lg:text-4xl font-semibold text-gray-800 mx-auto"
            >
              Gasim cele mai bune solutii pentru tine
            </motion.h3>
            <motion.p variants={scrollAnimation} className="mx-auto mb-10">
              Lets choose the package that is best for you and explore it
              happily and cheerfully.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="sm:grid sm:grid-cols-3 flex flex-col sm:grid-flow-row gap-y-14 py-4 lg:py-8 sm:px-0 lg:px-2">
            {dataCards.map((card, index) => (
              <ScrollAnimationWrapper
                className="flex justify-center"
                key={index}
              >
                <motion.div
                  variants={scrollAnimation}
                  className="bg-white cursor-pointer flex flex-col rounded-md pt-2 pb-4 lg:px-2 xl:px-5 w-[26rem] h-74"
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
                    <p className="text-lg md:text-xl text-gray-700 font-medium capitalize my-2 sm:my-2 flex-1 px-10">
                      {card.title}
                    </p>
                  </div>
                  <div className="flex flex-col w-full flex-none h-32 mt-2">
                    <p className="text-sm text-gray-700 text-start">
                      {card.description}
                    </p>
                  </div>
                  <div className="px-5 mt-2 text-sm bg-gray-200 rounded-md w-fit text-white-500 p-2 place-self-end">
                    Afla mai multe
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>

        <div className="flex flex-col w-full my-10 mt-20" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-700 leading-normal w-9/12 sm: lg:w-4/12 mx-auto "
            >
              Echipa Noastră: Consultanți Financiari{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-12 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              These are the stories of our customers who have joined us with
              great pleasure when using this crazy feature.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col pt-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="bg-white relative top-[150px] rounded-xl py-8 sm:py-14 px-4 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-gray-700 text-xl sm:text-2xl lg:text-4xl leading-relaxed font-medium mb-2">
                    Descoperă secretele <br />
                    financiare
                  </h5>
                  <p>
                    {" "}
                    Abonează-te pentru sfaturi exclusive de la consultanți.
                  </p>
                  <p className="text-[13px]">
                    #Credite #ConsultanțăFinanciară #EducațieFinanciară
                  </p>
                </div>
                <button className="btn-sm w-1/6">intra online</button>
                {/* <ButtonPrimary>Intra online</ButtonPrimary> */}
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Services;
