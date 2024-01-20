import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa6";

const Footer = () => {
  const phoneNumber = import.meta.env.VITE_REACT_APP_WHATSAPP_PHONE_NUMBER;
  const message =
    "Eu sunt Gabriela, consultantul tău online cu o experientă de peste 6 ani in domeniu. Te voi indruma să găsim cele mai bune soluții pentru nevoile tale de la obținerea unui credit nou, până la refinanțarea creditelor existente sau chiar eliminarea istoricului negativ din Biroul de Credit.";

  const whatsappLink = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
    phoneNumber
  )}&text=${encodeURIComponent(message)}`;

  const tiktokLink = `https://www.tiktok.com/@your-tiktok-username`;

  const instagramLink = `https://www.instagram.com/your-instagram-username/`;
  const facebookLink = `https://www.facebook.com/your-facebook-username`;

  return (
    <div className="bg-gray-300 sm:pt-44 pb-24 pt-10 ">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-2 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <p className="mb-4">
            <strong className="font-medium">Obține credit</strong> soluția ta
            rapidă pentru finanțare și oferte personalizate.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="social-icon">
              <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="h-6 w-6 text-blue-600" />
              </a>
            </div>
            <div className="social-icon">
              <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="h-6 w-6 text-pink-600" />
              </a>
            </div>
            <div className="social-icon">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="h-6 w-6 text-primary" />
              </a>
            </div>
            <div className="social-icon">
              <a href={tiktokLink} target="_blank" rel="noopener noreferrer">
                <FaTiktok className="h-6 w-6 text-gray-800" />
              </a>
            </div>
          </div>
          <p className="text-gray-400">
            ©{new Date().getFullYear()} - ObtineCredit.ro
          </p>
        </div>
        {/* <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-gray-800 mb-4 font-medium text-lg">Produse</p>
          <ul className="text-gray-800 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Servicii{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Locatii{" "}
            </li>

            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Blog{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-gray-800 mb-4 font-medium text-lg">Engage</p>
          <ul className="text-gray-800">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              ObtineCredit{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              FAQ{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Tutorials{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              About Us{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Privacy Policy{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Terms of Service{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-gray-800 mb-4 font-medium text-lg">Earn Money</p>
          <ul className="text-gray-800">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Affiliate{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Become Partner{" "}
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
