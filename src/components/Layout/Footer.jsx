import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa6";

const Footer = () => {
  const phoneNumber = import.meta.env.VITE_REACT_APP_WHATSAPP_PHONE_NUMBER;
  const message = "Salut, In legătură cu Obține Credit";
  const whatsappLink = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
    phoneNumber
  )}&text=${encodeURIComponent(message)}`;

  const openWhatsappChat = () => {
    window.open(whatsappLink, "_blank");
  };

  const tiktokLink = `https://www.tiktok.com/@obtinecredit`;
  const instagramLink = `https://www.instagram.com/obtinecredit/`;
  const facebookLink = `https://www.facebook.com/100063560649864`;

  return (
    <footer className="relative bg-gray-800 py-6">

      <div className="container-modern relative z-10">
        <div className="grid grid-rows-2 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-12 gap-8 sm:gap-12">
          <div className="row-span-2 sm:col-span-5 col-span-1 flex flex-col items-start">
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  Obține Credit
                </span>
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-md">
                Soluția ta rapidă pentru finanțare și oferte personalizate. 
                Transformăm visele tale în realitate prin servicii financiare de încredere.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-4 mb-8">
              <a 
                href={facebookLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon hover:bg-blue-50 hover:border-blue-200 hover:shadow-medium hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF className="h-5 w-5 text-blue-500" />
              </a>
              <a 
                href={instagramLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon hover:bg-pink-50 hover:border-pink-200 hover:shadow-medium hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5 text-pink-500" />
              </a>
              <button
                onClick={openWhatsappChat}
                className="social-icon hover:bg-primary-50 hover:border-primary-200 hover:shadow-medium hover:scale-110 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="h-5 w-5 text-primary-500" />
              </button>
              <a 
                href={tiktokLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon hover:bg-gray-100 hover:border-gray-300 hover:shadow-medium hover:scale-110 transition-all duration-300"
                aria-label="TikTok"
              >
                <FaTiktok className="h-5 w-5 text-gray-300" />
              </a>
            </div>
            
            <div className="pt-6 border-t border-gray-700 w-full">
              <p className="text-gray-400 text-sm mb-4">
                © {new Date().getFullYear()} <span className="text-primary-400 font-semibold">ObtineCredit.ro</span>. Toate drepturile rezervate.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-gray-400">
                <Link to="/politica-confidentialitate" className="hover:text-primary-400 transition-colors duration-300">
                  Politica de confidențialitate
                </Link>
                <span className="text-gray-600">|</span>
                <Link to="/politica-cookies" className="hover:text-primary-400 transition-colors duration-300">
                  Politica Cookies
                </Link>
                <span className="text-gray-600">|</span>
                <Link to="/gdpr" className="hover:text-primary-400 transition-colors duration-300">
                  GDPR
                </Link>
              </div>
            </div>
          </div>
          
          <div className="row-span-1 sm:col-span-3 sm:col-start-7 sm:col-end-10 flex flex-col">
            <p className="text-white mb-6 font-bold text-lg">Servicii</p>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary-400 cursor-pointer text-base transition-colors duration-300 hover:translate-x-1 inline-block">
                  Credite de nevoi personale
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary-400 cursor-pointer text-base transition-colors duration-300 hover:translate-x-1 inline-block">
                  Refinanțări
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary-400 cursor-pointer text-base transition-colors duration-300 hover:translate-x-1 inline-block">
                  Credite Imobiliare
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary-400 cursor-pointer text-base transition-colors duration-300 hover:translate-x-1 inline-block">
                  Leasing Auto
                </a>
              </li>
            </ul>
          </div>
          
          <div className="row-span-1 sm:col-span-4 sm:col-start-10 sm:col-end-13 flex flex-col">
            <p className="text-white mb-6 font-bold text-lg">Contact</p>
            <ul className="space-y-3">
              <li>
                <a href="tel:0786744694" className="text-gray-300 hover:text-primary-400 cursor-pointer text-base flex items-center gap-2 transition-colors duration-300 group">
                  <span className="text-primary-400 group-hover:scale-110 transition-transform duration-300">📞</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">0786 744 694</span>
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary-400 cursor-pointer text-base transition-colors duration-300 hover:translate-x-1 inline-block">
                  Despre noi
                </a>
              </li>
              <li>
                <a href="#testimoni" className="text-gray-300 hover:text-primary-400 cursor-pointer text-base transition-colors duration-300 hover:translate-x-1 inline-block">
                  Testimoniale
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
