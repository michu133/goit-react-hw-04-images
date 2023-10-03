import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Audio } from 'react-loader-spinner';
import { useContext } from 'react';
import { GalleryContext } from 'context/GalleryContext';

export const App = () => {
  const { totalHits, isLoading } = useContext(GalleryContext);

  return (
    <div>
      <Searchbar />
      {isLoading ? (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      ) : (
        <ImageGallery>{totalHits > 12 ? <Button /> : null}</ImageGallery>
      )}
    </div>
  );
};
