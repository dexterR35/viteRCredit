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
            <div className="card-modern rounded-2xl p-6 sm:p-8 flex flex-col h-full">
              <div className="flex flex-col xl:flex-row w-full items-start xl:items-center justify-between mb-4">
                <div className="flex items-center order-2 xl:order-1 gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full opacity-20 blur-md"></div>
                    <img
                      src={listTestimonis.image}
                      alt={listTestimonis.name}
                      className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-white shadow-medium"
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <p className="text-base sm:text-lg text-gray-900 capitalize font-bold">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-gray-600 capitalize">
                      {listTestimonis.jobTitle}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center gap-2 order-1 xl:order-2 mb-3 xl:mb-0">
                  <div className="flex items-center gap-1 bg-primary-50 px-3 py-1.5 rounded-full">
                    <p className="text-sm font-bold text-primary-700">{listTestimonis.rating}</p>
                    <FaStar className="h-4 w-4 text-yellow-400 fill-current" />
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-0 left-0 text-6xl text-primary-100 font-serif leading-none">"</div>
                <p className="relative mt-4 text-left text-sm sm:text-base text-gray-700 leading-relaxed pl-6">
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
            className="flex items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-xl bg-white border-2 border-primary-300 hover:border-primary-500 hover:bg-gradient-to-r hover:from-primary-500 hover:to-primary-600 hover:text-white transition-[border-color,background-color,color,transform,box-shadow] duration-200 text-primary cursor-pointer shadow-medium hover:shadow-glow transform hover:scale-110 active:scale-95"
            onClick={sliderRef?.slickPrev}
            aria-label="Previous testimonial"
          >
            <IoChevronBackSharp className="h-6 w-6" />
          </button>
          <button
            className="flex items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-xl bg-white border-2 border-primary-300 hover:border-primary-500 hover:bg-gradient-to-r hover:from-primary-500 hover:to-primary-600 hover:text-white transition-[border-color,background-color,color,transform,box-shadow] duration-200 text-primary cursor-pointer shadow-medium hover:shadow-glow transform hover:scale-110 active:scale-95"
            onClick={sliderRef?.slickNext}
            aria-label="Next testimonial"
          >
            <IoChevronForwardSharp className="h-6 w-6" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
