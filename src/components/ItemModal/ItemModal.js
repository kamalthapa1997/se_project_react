import { useState } from "react";

const ItemModal = ({ selectedCard, handleModalClose, handleDelete }) => {
  // const [deleteModal, setDeleteModal] = useState("");

  const handleDeleteModal = () => {
    // setDeleteModal("delete");
    handleDelete(selectedCard.id);
  };

  return (
    <div className={`modal`}>
      <div className="modal__container modal__container_preview">
        <button
          type="button"
          className="modal__close"
          onClick={handleModalClose}
        />
        <img className="modal__image" src={selectedCard.imageUrl} />
        <div className="modal__details">
          <div className="modal__caption">
            <div className="modal__image-caption">{selectedCard.name}</div>
            <div className="modal__image-caption">
              Weather: {selectedCard.weather}
            </div>
          </div>
          <button
            className="modal__dlt-tag"
            type="button"
            onClick={handleDeleteModal}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
