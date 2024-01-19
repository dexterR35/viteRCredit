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
      name: "Matei Basarab",
      image: people1,
      jobTitle: "Consultant Financiar",
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
      jobTitle: "CEO",
      rating: "4.5",
      testimoni:
        "Când compania mea a avut nevoie urgentă de fonduri pentru investiții, dosarul de creditare a fost respins de băncile partenere. Prin intermediul colaborării cu Obtine Credit, am identificat rapid oferte noi, iar finanțarea obținută a fost soluția crucială în perioada dificilă",
    },
    {
      name: "Hodor Gabriela",
      image: people1,
      jobTitle: "Consultant Financiar",
      rating: "4.5",
      testimoni:
        "Când compania mea a avut nevoie urgentă de fonduri pentru investiții, dosarul de creditare a fost respins de băncile partenere. Prin intermediul colaborării cu Obtine Credit, am identificat rapid oferte noi, iar finanțarea obținută a fost soluția crucială în perioada dificilă",
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
            <div className="border-2 border-gray-500 hover:border-green-500 transition-all rounded-lg p-6 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <img
                    src={listTestimonis.image}
                    alt="Icon People"
                    className="w-10 h-10"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {listTestimonis.jobTitle}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{listTestimonis.rating}</p>
                  <span className="flex ml-4">
                    <FaStar className="h-4 w-4 text-yellow-400" />
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left text-sm">
                “{listTestimonis.testimoni}”.
              </p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-green-500 border hover:bg-primary hover:text-white transition-all text-primary cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <IoChevronBackSharp className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-green-500 border hover:bg-primary hover:text-white transition-all text-primary cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <IoChevronForwardSharp className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
