import { GalleryContext } from 'context/GalleryContext';
import { useContext } from 'react';

export const Button = () => {
  const { page, setPage } = useContext(GalleryContext);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <button onClick={handleLoadMore} className="Button" type="button">
      Load more
    </button>
  );
};
