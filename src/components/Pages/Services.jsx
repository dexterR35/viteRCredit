import { useMemo } from "react";

import Testimoni from "./Testimoni";

import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import { IoWallet, IoRefresh, IoHome, IoDocumentText, IoBusiness, IoCar } from "react-icons/io5";

import QuizButton from "../steps/Qbutton";

const Services = ({ setIsModalOpen }) => {
  const dataCards = [
    {
      icon: IoWallet,
      btnTitle: "Obține Credit",
      title: "Credite de nevoi personale",
      description:
        "Obțineți creditul de nevoi personale de care aveți nevoie cu ușurință și rapid. Echipa noastră de experți vă stă la dispoziție pentru a vă oferi soluții financiare personalizate, adaptate nevoilor dumneavoastră. Simplu, eficient, și fără complicații.",
    },
    {
      icon: IoRefresh,
      btnTitle: "Refinanțează",
      title: "Refinanțări",
      description:
        "Optați pentru refinanțare cu încredere. Echipa noastră vă asigură soluții personalizate pentru a consolida și eficientiza datoriile dvs. Există oportunități noi pentru un viitor financiar mai stabil.",
    },
    {
      icon: IoHome,
      btnTitle: "Completează",
      title: "Credite Imobiliare",
      description:
        "Asigurați-vă viitorul cu un credit imobiliar adaptat nevoilor dumneavoastră. Echipa noastră vă ghidează pas cu pas în procesul de obținere a unui credit pentru casa visurilor voastre. Investiția în confortul dumneavoastră începe aici.",
    },
    {
      icon: IoDocumentText,
      btnTitle: "Află mai multe",
      title: "Stergere din biroul de credit",
      description:
        "Asigurați-vă un start proaspăt eliminând datele negative din biroul de credit. Echipa noastră vă oferă suport specializat pentru a remedia situațiile financiare nefericite și a vă restabili un profil de credit pozitiv.",
    },
    {
      icon: IoBusiness,
      btnTitle: "Aplică aici",
      title: "Credite IMM-uri",
      description:
        "Optați pentru creditele pe firmă pentru a-ți dezvolta afacerea fără a-ți utiliza propriile resurse financiare. Echipa noastră vă oferă soluții personalizate pentru a obține finanțarea necesară și a consolida succesul în mediul de afaceri.",
    },
    {
      icon: IoCar,
      btnTitle: "Descoperiți",
      title: "Leasing Auto",
      description:
        "Descoperiți soluții accesibile de leasing auto cu ajutorul consultanților noștri financiari. Beneficiați de planuri flexibile de finanțare, concepute să vă ajute să economisiți și să alegeți cea mai bună opțiune fără complicații.",
    },
  ];
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="w-full section-padding relative overflow-hidden" id="services">
      {/* Minimalist Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-50/30 to-primary-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-accent-50/30 to-accent-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>

      <div className="container-modern flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.div
              variants={scrollAnimation}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block mb-6 px-4 py-2 bg-primary-50/80 text-primary-700 rounded-full text-sm font-medium tracking-wide mx-auto">
                Serviciile noastre
              </div>
              <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mx-auto mb-6 text-balance">
                Găsim cele mai bune{" "}
                <span className="bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 bg-clip-text text-transparent">
                  soluții
                </span>{" "}
                pentru tine
              </h3>
              <p className="mx-auto mb-16 mt-4 w-full md:w-2/3 lg:w-1/2 text-lg sm:text-xl text-gray-600 leading-relaxed text-balance">
                Când planurile tale nu suportă amânare, echipa Obține Credit te
                ajută să le pui în aplicare!
              </p>
            </motion.div>
          </ScrollAnimationWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 py-6 sm:py-8">
            {dataCards.map((card, index) => (
              <ScrollAnimationWrapper
                className="flex justify-center"
                key={index}
              >
                <motion.div
                  variants={scrollAnimation}
                  className="card-modern flex flex-col h-full group"
                >
                  <div className="relative mb-6 flex flex-row items-center gap-4 p-6 bg-gray-50/50 rounded-2xl border border-gray-100/60 group-hover:border-gray-200/80 group-hover:bg-gray-50 transition-all duration-500">
                    <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-medium group-hover:scale-105 transition-all duration-500">
                      {card.icon && (() => {
                        const Icon = card.icon;
                        return <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />;
                      })()}
                    </div>
                    <h4 className="text-lg md:text-xl text-gray-900 capitalize flex-1 font-display font-semibold text-left group-hover:text-primary-600 transition-colors duration-500">
                      {card.title}
                    </h4>
                  </div>
                  
                  <div className="flex flex-col w-full flex-1 mb-8">
                    <p className="text-base sm:text-lg text-gray-600 text-start leading-relaxed group-hover:text-gray-700 transition-colors duration-500">
                      {card.description}
                    </p>
                  </div>
                  
                  <QuizButton
                    onClick={() => setIsModalOpen(true)}
                    className="px-6 mt-auto font-semibold bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 rounded-xl text-white py-3.5 w-full shadow-soft hover:shadow-medium transition-all duration-500 transform hover:scale-[1.02] active:scale-[0.98]"
                    text={card.btnTitle}
                  />
                </motion.div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>

        <div className="flex flex-col w-full mt-20 lg:mt-32" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.div
              variants={scrollAnimation}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block mb-6 px-4 py-2 bg-primary-50/80 text-primary-700 rounded-full text-sm font-medium tracking-wide mx-auto">
                Testimoniale
              </div>
              <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight w-full mx-auto mb-6 text-balance">
                Soluții{" "}
                <span className="bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 bg-clip-text text-transparent">
                  Constructive
                </span>
              </h3>
              <p className="leading-relaxed mx-auto mb-16 mt-4 w-full sm:w-2/3 lg:w-1/2 text-lg sm:text-xl text-gray-600 text-balance">
                Eficient, Rapid, Reușită
              </p>
            </motion.div>
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper className="w-full flex flex-col pt-2">
            <motion.div 
              variants={scrollAnimation}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper className="relative w-full mt-12 lg:mt-20">
            <motion.div 
              variants={scrollAnimation} 
              custom={{ duration: 3 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/80 backdrop-blur-xl relative rounded-3xl py-12 sm:py-16 px-6 sm:px-12 lg:px-20 w-full flex flex-col sm:flex-row justify-between items-center z-10 shadow-soft border border-gray-100/60 overflow-hidden">
                <div className="flex flex-col text-left w-full sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="font-display text-gray-900 text-3xl sm:text-4xl lg:text-5xl leading-tight font-bold mb-4 text-balance">
                    Descoperă secretele{" "}
                    <span className="bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 bg-clip-text text-transparent">
                      financiare
                    </span>
                  </h5>
                  <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
                    Abonează-te pentru sfaturi exclusive de la consultanți.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-4 py-2 bg-gray-50 rounded-full text-sm font-medium text-gray-700 border border-gray-100/60">#Credite</span>
                    <span className="px-4 py-2 bg-gray-50 rounded-full text-sm font-medium text-gray-700 border border-gray-100/60">#ConsultanțăFinanciară</span>
                    <span className="px-4 py-2 bg-gray-50 rounded-full text-sm font-medium text-gray-700 border border-gray-100/60">#EducațieFinanciară</span>
                  </div>
                </div>
                <button className="btn-sm w-full sm:w-auto whitespace-nowrap">Intră online</button>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Services;
