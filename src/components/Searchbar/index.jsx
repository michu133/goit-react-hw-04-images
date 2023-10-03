import React, { useContext, useState } from 'react';
import { GalleryContext } from 'context/GalleryContext';

export const Searchbar = () => {
  const {
    setperPage,
    setPage,
    settotalHits,
    setImages,
    setQuery,
    fetchImages,
  } = useContext(GalleryContext);
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(inputValue);
    if (inputValue !== '') {
      fetchImages(inputValue, 12, 1);
    } else {
      setImages([]);
      setQuery('');
      settotalHits(0);
    }
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button className="SearchForm-button" type="submit">
          <span className="SearchForm-button-label"></span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          onChange={handleChange}
          value={inputValue}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
