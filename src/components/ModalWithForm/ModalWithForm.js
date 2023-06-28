import "./ModalWithForm.css";
const ModalWithForm = ({
  name,
  children,
  title,
  buttonText,
  handleModalClose,
}) => {
  return (
    <div className={`modal modal__tupe_${name}`}>
      <div className="modal__container">
        <button
          type="button"
          onClick={handleModalClose}
          className="modal__close"
        />
        <h3 className="modal__title">{title}</h3>
        <form> {children}</form>
        <button className="modal__submit" type="button">
          {(buttonText = "New garment")}
        </button>
      </div>
    </div>
  );
};
export default ModalWithForm;
