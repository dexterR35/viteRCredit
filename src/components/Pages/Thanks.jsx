import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Multumim() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white text-center">
      <IoCheckmarkCircleOutline className="text-green-500 text-7xl mb-5" />

      <h1 className="text-3xl font-bold mb-3 text-gray-800">Mulțumim pentru solicitare!</h1>

      <p className="text-gray-600 max-w-md mb-6">
        Am primit cu succes cererea dumneavoastră. Un consultant vă va contacta în cel mai scurt timp pentru a discuta detaliile necesare.
      </p>

      <a
        href="tel:+40786744694"
        className="mb-4 block text-blue-600 hover:text-blue-800 font-medium"
      >
        📞 Contactați-ne direct: +40 786 744 694
      </a>

      <Link
        to="/"
        className="mt-2 inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition duration-200"
      >
        Înapoi la pagina principală
      </Link>
    </div>
  );
}
