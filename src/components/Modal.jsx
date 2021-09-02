import ReactDom from "react-dom";

export default function Modal({ open, children, onClose }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="overlay-modal">
        <div className="modal">
          <div className="close-button">
            <button onClick={onClose}>X</button>
          </div>
          {children}
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
