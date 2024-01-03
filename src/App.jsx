import { useState } from "react";
import Hero from "./components/Pages/Hero";
import About from "./components/Pages/About";
import Services from "./components/Pages/Services";
import Layout from "./components/Layout/Layout";
import StartQuiz from "./components/startQuiz";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed top-0 bg-red-500 z-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded">
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  );
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <Layout isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <div className="bg-gray-200">
          <Hero setIsModalOpen={setIsModalOpen} />
        </div>
        <div className="bg-white">
          <About />
        </div>
        <div className="bg-gray-200">
          <Services />
        </div>
      </Layout>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <StartQuiz />
      </Modal>
    </div>
  );
}
