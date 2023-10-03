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
        <p>Loader</p>
      ) : (
        <ImageGallery>{totalHits > 12 ? <Button /> : null}</ImageGallery>
      )}
    </div>
  );
};
