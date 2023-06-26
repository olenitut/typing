import classes from "./modal.module.css";

const Modal = ({ children, onClose }) => {
  const handelOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={classes.modal} onClick={handelOverlayClick}>
      <div className={classes["modal__inner"]}>
        <div className={classes["modal__header"]}>
          <button onClick={onClose} className={classes["modal__close"]}>
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
