import React, { useEffect, useRef } from 'react';

export const Modal = ({ src, alt, closeModal }) => {
  const handleClose = useRef(e => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  useEffect(() => {
    const handleKeyPress = e => handleClose.current(e);
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [closeModal]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <div className="Overlay" onClick={handleBackdropClick}>
      <div className="Modal">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};
