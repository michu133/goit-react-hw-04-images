import { useEffect } from 'react';

export const Modal = ({ src, alt, closeModal }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleClose);

    return () => {
      document.removeEventListener('keydown', handleClose);
    };
  }, []);

  const handleClose = e => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };
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
