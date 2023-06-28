const ModalPreview = ({ selectedCard, handleModalClose }) => {
  return (
    <div className={`modal`}>
      <div className="modal__container modal__container_preview">
        <button
          type="button"
          className="modal__close"
          onClick={handleModalClose}
        />
        <img className="modal__image" src={selectedCard.link} />
        <div className="modal__image-caption">{selectedCard.name}</div>
        <div className="modal__image-caption">
          Weather: {selectedCard.weather}
        </div>
      </div>
    </div>
  );
};
export default ModalPreview;
