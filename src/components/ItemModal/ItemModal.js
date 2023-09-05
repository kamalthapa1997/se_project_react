import { useContext, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemModal = ({ selectedCard, handleModalClose, handleDelete }) => {
  const { currentUser } = useContext(CurrentUserContext);

  const handleDeleteModal = () => {
    handleDelete(selectedCard._id);
  };

  const isOwn =
    selectedCard.owner === (currentUser._id || currentUser._id == null);

  const itemDeleteButtonClassName = `modal__dlt-tag ${
    isOwn ? "modal__dlt-tag_visible" : "modal__dlt-tag_hidden"
  }`;

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
            className={itemDeleteButtonClassName}
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
