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
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 sm:pt-32 pb-12 pt-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -z-10"></div>

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
                className="social-icon"
                aria-label="Facebook"
              >
                <FaFacebookF className="h-5 w-5 text-blue-500" />
              </a>
              <a 
                href={instagramLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5 text-pink-500" />
              </a>
              <button
                onClick={openWhatsappChat}
                className="social-icon"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="h-5 w-5 text-primary" />
              </button>
              <a 
                href={tiktokLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="TikTok"
              >
                <FaTiktok className="h-5 w-5 text-gray-300" />
              </a>
            </div>
            
            <div className="pt-6 border-t border-gray-700 w-full">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} <span className="text-primary-400 font-semibold">ObtineCredit.ro</span>. Toate drepturile rezervate.
              </p>
            </div>
          </div>
          
          <div className="row-span-1 sm:col-span-3 sm:col-start-7 sm:col-end-10 flex flex-col">
            <p className="text-white mb-6 font-bold text-lg">Servicii</p>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 cursor-pointer text-base">
                  Credite de nevoi personale
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 cursor-pointer text-base">
                  Refinanțări
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 cursor-pointer text-base">
                  Credite Imobiliare
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 cursor-pointer text-base">
                  Leasing Auto
                </a>
              </li>
            </ul>
          </div>
          
          <div className="row-span-1 sm:col-span-4 sm:col-start-10 sm:col-end-13 flex flex-col">
            <p className="text-white mb-6 font-bold text-lg">Contact</p>
            <ul className="space-y-3">
              <li>
                <a href="tel:0786744694" className="text-gray-300 cursor-pointer text-base flex items-center gap-2">
                  <span className="text-primary-400">📞</span>
                  0786 744 694
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 cursor-pointer text-base">
                  Despre noi
                </a>
              </li>
              <li>
                <a href="#testimoni" className="text-gray-300 cursor-pointer text-base">
                  Testimoniale
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
