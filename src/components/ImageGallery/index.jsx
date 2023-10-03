import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { GalleryContext } from 'context/GalleryContext';
import { useContext } from 'react';

export const ImageGallery = ({ children }) => {
  const { images } = useContext(GalleryContext);

  return (
    <ul className="ImageGallery">
      {images.map(el => {
        return (
          <ImageGalleryItem
            key={el.id}
            src={el.webformatURL}
            alt={el.tags}
            srcModal={el.largeImageURL}
          ></ImageGalleryItem>
        );
      })}
      {children}
    </ul>
  );
};
