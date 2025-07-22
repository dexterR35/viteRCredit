import Quiz from "./Quiz";


const Modal = ({ onClose, isModalVisible }) => {
  return (
    <>
      {isModalVisible && (
        <div className="modal-overlay">
          <div className="modal">
            <button onClick={onClose} className="close-button">
              Close
            </button>
            <Quiz onClose={onClose} isQuizVisible={true} />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
