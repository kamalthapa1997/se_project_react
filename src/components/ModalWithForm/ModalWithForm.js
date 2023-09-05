import "./ModalWithForm.css";
const ModalWithForm = ({
  name,
  children,
  title,
  buttonText,
  handleModalClose,
  linkToRegOrLogin,
  onSubmit,
  handleRegLog,
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
          <div className="modal__submit-buttons">
            <button className="modal__submit">{buttonText}</button>

            <p
              className="modal__btn-to-register-or-login"
              onClick={handleRegLog}
            >
              {linkToRegOrLogin}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ModalWithForm;
