import Quiz from "./Quiz";
// import AnotherComponent from "./AnotherComponent"; // Import the component you want to include

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
            {/* Include AnotherComponent inside the modal */}
            {/* <AnotherComponent /> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
