import "./ModalWithForm.css";
const ModalWithForm = ({
  name,
  children,
  title,
  buttonText,
  handleModalClose,
  isOpen,
  onSubmit,
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
        <form onSubmit={onSubmit}>
          {children}
          <button className="modal__submit">{buttonText}</button>
        </form>
      </div>
    </div>
  );
};
export default ModalWithForm;
