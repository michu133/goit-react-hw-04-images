import { createContext, useEffect, useState } from 'react';

const GalleryContext = createContext();

const GalleryProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [totalHits, settotalHits] = useState(0);
  const [perPage, setperPage] = useState(12);
  const [isLoading, setisLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchImages = async (query, perPage, page) => {
    const URL = 'https://pixabay.com/api/';
    const KEY = '37022905-cc72506166b9ffbf95abb4909';

    setisLoading(true);

    try {
      const response = await fetch(
        `${URL}?key=${KEY}&q=${query}&per_page=${perPage}&page=${page}&image_type=photo`
      );

      const data = await response.json();

      if (page === 1) {
        setImages(data.hits);
      } else {
        setImages(curr => [...curr, ...data.hits]);
      }
      settotalHits(data.totalHits);
      setisLoading(false);
    } catch (error) {
      console.log('error', error);
      setisLoading(false);
    }
  };

  useEffect(() => {
    if (query !== '') {
      fetchImages(query, perPage, page);
    }
  }, [query, page, perPage]);

  return (
    <GalleryContext.Provider
      value={{
        images,
        setImages,
        query,
        setQuery,
        totalHits,
        settotalHits,
        perPage,
        setperPage,
        isLoading,
        setisLoading,
        fetchImages,
        page,
        setPage,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};
export { GalleryContext, GalleryProvider };
