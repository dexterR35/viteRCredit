import { useState, useEffect, useRef } from "react";
import Hero from "./components/Pages/Hero";
import About from "./components/Pages/About";
import Services from "./components/Pages/Services";
import Layout from "./components/Layout/Layout";
import StartQuiz from "./components/startQuiz";
import SeoHead from "./components/SeoHead";
import BonusModal from "./components/BonusModal";
import { IoCloseOutline } from "react-icons/io5";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed w-full top-0 z-50 flex justify-center items-start sm:justify-start bg-white before overflow-scroll"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative loading w-[480px] h-screen">
        <button
          onClick={onClose}
          className="p-3 px-5 text-md text-gray-400 absolute rounded-md right-2 top-3 z-20"
          aria-label="Close modal"
        >
          <IoCloseOutline />
        </button>
        {children}
      </div>
    </div>
  );
};

export default function App() {
  const SHOW_BONUS_DELAY = 1000; // 10 seconds
  const BONUS_COOLDOWN = 2000; // 20 seconds

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showBonus, setShowBonus] = useState(false);
  const [bonusClosedAt, setBonusClosedAt] = useState(null);
  const showBonusTimeout = useRef(null);

  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  // Clear any pending timeout on unmount
  useEffect(() => {
    return () => {
      if (showBonusTimeout.current) clearTimeout(showBonusTimeout.current);
    };
  }, []);

  // Combined effect: show bonus banner after delay respecting cooldown and modal open state
  useEffect(() => {
    if (showBonusTimeout.current) {
      clearTimeout(showBonusTimeout.current);
    }

    // Hide bonus immediately if modal is open
    if (isModalOpen) {
      setShowBonus(false);
      return;
    }

    const now = Date.now();

    if (bonusClosedAt) {
      const timeSinceClose = now - bonusClosedAt;

      if (timeSinceClose >= BONUS_COOLDOWN) {
        // Cooldown passed — show bonus after delay
        showBonusTimeout.current = setTimeout(() => {
          setShowBonus(true);
        }, SHOW_BONUS_DELAY);
      } else {
        // Still in cooldown — schedule showing bonus after remaining cooldown + delay
        const remainingCooldown = BONUS_COOLDOWN - timeSinceClose;
        showBonusTimeout.current = setTimeout(() => {
          setShowBonus(true);
        }, remainingCooldown + SHOW_BONUS_DELAY);
      }
    } else {
      // No cooldown — show bonus after delay
      showBonusTimeout.current = setTimeout(() => {
        setShowBonus(true);
      }, SHOW_BONUS_DELAY);
    }

    return () => {
      if (showBonusTimeout.current) clearTimeout(showBonusTimeout.current);
    };
  }, [isModalOpen, bonusClosedAt]);

  // Open modal handler
  const openModal = () => {
    setIsModalOpen(true);
    setShowBonus(false);
    if (showBonusTimeout.current) clearTimeout(showBonusTimeout.current);
  };

  // Close modal handler
  const closeModal = () => {
    setIsModalOpen(false);

    // Clear existing timeout and set new timeout to show bonus after delay if cooldown passed
    if (showBonusTimeout.current) clearTimeout(showBonusTimeout.current);

    const now = Date.now();

    if (!bonusClosedAt || now - bonusClosedAt >= BONUS_COOLDOWN) {
      showBonusTimeout.current = setTimeout(() => {
        setShowBonus(true);
      }, SHOW_BONUS_DELAY);
    }
  };

  // Bonus banner manual close handler
  const closeBonusManually = () => {
    setShowBonus(false);
    setBonusClosedAt(Date.now());
    if (showBonusTimeout.current) clearTimeout(showBonusTimeout.current);
    // Bonus will reappear automatically after cooldown + delay via the combined effect
  };

  return (
    <>
      <SeoHead />
      <div>
        <Layout isModalOpen={isModalOpen} setIsModalOpen={openModal}>
          <div className="bg-gray-200">
            <Hero setIsModalOpen={openModal} />
          </div>
          <div className="bg-white" id="about">
            <About />
          </div>
          <div className="bg-gray-200">
            <Services setIsModalOpen={openModal} />
          </div>
        </Layout>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <StartQuiz />
        </Modal>

        <BonusModal visible={showBonus} onClose={closeBonusManually} />
      </div>
    </>
  );
}
