import { useState } from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa6";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import people1 from "/Icon/people-1.png";
import people2 from "/Icon/people-2.png";
import people3 from "/Icon/people-3.png";
const Testimoni = ({
  listTestimoni = [
    {
      name: "Matei Dumitru",
      image: people1,
      jobTitle: "Casier",
      rating: "4.2",
      testimoni:
        "Am recurs la serviciile oferite de Obtine Credit.ro după ce am întâmpinat eșecuri în încercările mele de a obține un credit de nevoi personale. Acum, după ce am parcurs întregul proces, nu sunt sigur dacă m-aș fi descurcat fără ajutorul lor",
    },
    {
      name: "Florina Matache",
      image: people2,
      jobTitle: "Magaziner",
      rating: "4.4",
      testimoni:
        "Nu mă așteptam să îndeplinesc criteriile pentru un credit ipotecar până când nu am descoperit sprijinul oferit de echipa Obtine Credit. Prin intermediul serviciilor lor de consultanță, am reușit să identific banca potrivită pentru situația mea",
    },
    {
      name: "Paraschiv Matei",
      image: people3,
      jobTitle: "Asistent",
      rating: "4.1",
      testimoni:
        "Când compania mea a avut nevoie urgentă de fonduri pentru investiții, dosarul de creditare a fost respins de băncile partenere. Prin intermediul colaborării cu Obtine Credit, am identificat rapid oferte noi, iar finanțarea obținută a fost soluția crucială în perioada dificilă",
    },
    {
      name: "Mihai Laurențiu",
      image: people1,
      jobTitle: "Constructor",
      rating: "4.5",
      testimoni:
        "Prin intermediul parteneriatului nostru, finanțarea obținută a fost elementul crucial care ne-a permis să depășim cu succes perioada dificilă. Colaborarea cu Obtine Credit a fost esențială pentru a asigura continuarea proiectelor noastre de construcții.",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all"></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch "
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="flex items-stretch px-3" key={index}>
            <div className="card-modern rounded-3xl p-6 sm:p-8 flex flex-col h-full hover:shadow-large hover:border-primary-200 transition-all duration-300 group bg-gradient-to-br from-white via-white to-gray-50/50">
              <div className="flex flex-col xl:flex-row w-full items-start xl:items-center justify-between mb-5">
                <div className="flex items-center order-2 xl:order-1 gap-4">
                  <div className="relative group-hover:scale-110 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full opacity-30 blur-lg group-hover:opacity-40 transition-opacity duration-300"></div>
                    <img
                      src={listTestimonis.image}
                      alt={listTestimonis.name}
                      className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-white shadow-medium ring-2 ring-primary-100 group-hover:ring-primary-300 transition-all duration-300"
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <p className="text-base sm:text-lg text-gray-900 capitalize font-bold group-hover:text-primary-700 transition-colors duration-300">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-gray-600 capitalize font-medium">
                      {listTestimonis.jobTitle}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center gap-2 order-1 xl:order-2 mb-3 xl:mb-0">
                  <div className="flex items-center gap-1.5 bg-gradient-to-r from-primary-50 to-primary-100 px-4 py-2 rounded-full border border-primary-200 group-hover:shadow-medium transition-all duration-300">
                    <p className="text-sm font-bold text-primary-700">{listTestimonis.rating}</p>
                    <FaStar className="h-4 w-4 text-yellow-400 fill-current" />
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-0 left-0 text-7xl text-primary-100/60 font-serif leading-none group-hover:text-primary-200/80 transition-colors duration-300">"</div>
                <p className="relative mt-4 text-left text-sm sm:text-base text-gray-700 leading-relaxed pl-6 group-hover:text-gray-800 transition-colors duration-300">
                  {listTestimonis.testimoni}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-center md:justify-end mt-8 md:mt-12">
        <div className="flex flex-none justify-between w-full md:w-auto gap-4">
          <button
            className="flex items-center justify-center h-14 w-14 md:h-16 md:w-16 rounded-2xl bg-white border-2 border-primary-200 hover:border-primary-500 hover:bg-gradient-to-br hover:from-primary-500 hover:via-primary-600 hover:to-primary-700 hover:text-white transition-all duration-300 text-primary-600 cursor-pointer shadow-medium hover:shadow-glow transform hover:scale-110 active:scale-95"
            onClick={sliderRef?.slickPrev}
            aria-label="Previous testimonial"
          >
            <IoChevronBackSharp className="h-7 w-7" />
          </button>
          <button
            className="flex items-center justify-center h-14 w-14 md:h-16 md:w-16 rounded-2xl bg-white border-2 border-primary-200 hover:border-primary-500 hover:bg-gradient-to-br hover:from-primary-500 hover:via-primary-600 hover:to-primary-700 hover:text-white transition-all duration-300 text-primary-600 cursor-pointer shadow-medium hover:shadow-glow transform hover:scale-110 active:scale-95"
            onClick={sliderRef?.slickNext}
            aria-label="Next testimonial"
          >
            <IoChevronForwardSharp className="h-7 w-7" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
