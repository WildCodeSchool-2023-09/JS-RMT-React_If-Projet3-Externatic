import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./modal.css";

const Modal = forwardRef((props, ref) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setModal(!modal);
    }
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  useImperativeHandle(ref, () => ({
    toggleModal,
  }));

  return (
    <div>
      {modal && (
        <div ref={ref} className="modal">
          <div
            role="button"
            tabIndex={0}
            aria-label="fermeture-modal"
            onClick={toggleModal}
            onKeyDown={handleKeyDown}
            className="overlay"
          />
          <div className="modal-content">
            <p>Connecte toi pour accéder à cette page !</p>
            <button type="button" className="close-modal" onClick={toggleModal}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
});

export default Modal;
