import { GalleryContext } from 'context/GalleryContext';
import { useContext } from 'react';

export const Searchbar = () => {
  const { query, setQuery } = useContext(GalleryContext);

  const handleSearch = newQuery => {
    if (newQuery !== query) {
      setQuery(newQuery);
    }
  };

  const handleChange = e => {
    const { value } = e.target;
    handleSearch(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetchImages(query, 12, 1);
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
          value={query}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
