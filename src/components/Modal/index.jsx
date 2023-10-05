import { useEffect } from 'react';

export const Modal = ({ src, alt, closeModal }) => {
  const handleClose = e => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };
  useEffect(() => {
    const handleClose = e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleClose);

    return () => {
      document.removeEventListener('keydown', handleClose);
    };
  }, [handleClose]);

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
