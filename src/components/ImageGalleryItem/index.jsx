import { Modal } from 'components/Modal';
import { useState } from 'react';

export const ImageGalleryItem = ({ src, alt, srcModal }) => {
  const [isModal, setisModal] = useState(false);

  const showModal = () => {
    setisModal(true);
  };

  const hideModal = () => {
    setisModal(false);
  };

  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={src}
        alt={alt}
        onClick={showModal}
      ></img>
      {isModal ? (
        <Modal closeModal={hideModal} src={srcModal} alt={alt}></Modal>
      ) : null}
    </li>
  );
};
