import { useState, useEffect } from "react";
import Hero from "./components/Pages/Hero";
import About from "./components/Pages/About";
import Services from "./components/Pages/Services";
import Layout from "./components/Layout/Layout";
import StartQuiz from "./components/startQuiz";
import SeoHead from "./components/SeoHead";
import { IoCloseOutline } from "react-icons/io5";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed w-full top-0 z-50 flex justify-center items-start sm:justify-start bg-white before overflow-scroll">
      <div className="relative loading w-[480px] h-screen">
        <button
          onClick={onClose}
          className="p-3 px-5 text-md text-gray-400 absolute rounded-md right-2 top-3 z-20"
        >
          {" "}
          <IoCloseOutline />
        </button>
        {children}
      </div>
    </div>
  );
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isModalOpen]);
  return (
    <>
      <SeoHead />
      <div>
        <Layout isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
          <div className="bg-gray-200">
            <Hero setIsModalOpen={setIsModalOpen} />
          </div>
          <div className="bg-white">
            <About />
          </div>
          <div className="bg-gray-200">
            <Services setIsModalOpen={setIsModalOpen} />
          </div>
        </Layout>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <StartQuiz />
        </Modal>
      </div>
    </>
  );
}
