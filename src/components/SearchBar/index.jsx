/* eslint-disable react/prop-types */
import styles from './searchBar.module.css';
import searchIcon from '/icons/search.svg';
import { useState, useEffect } from 'react';

const SearchBar = ({ data, setSelectedCard, setSearchMarker }) => {
  const [searchInput, setSearchInput] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [searchResult, setSearchResult] = useState([]);

  const createSearchList = () => {
    if (searchInput) {
      if (isNaN(searchInput)) {
        setSearchResult(
          data.filter((item) => item.title.includes(searchInput.toLowerCase()))
        );
      } else {
        const newData = [...new Set(data.map((item) => item.userId))];
        setSearchResult(
          newData.filter((item) => String(item).includes(searchInput))
        );
      }
    } else {
      setSearchResult([]);
    }
  };

  const searchSelect = (item) => {
    if (item && item.title) {
      setSelectedCard(item.userId);
      setSearchMarker(item.title);
    } else {
      setSelectedCard(item);
    }
    setSearchInput('');
    setSearchResult([]);
  };

  useEffect(() => {
    createSearchList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  return (
    <div>
      <div className={styles.inputWrapper}>
        <img style={{ width: '15px' }} src={searchIcon} alt='search' />
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type='text'
          className={styles.input}
          placeholder='Search'
        />
        <div className={styles.resultList}>
          {searchResult.map((item) => {
            return (
              <div
                onClick={() => searchSelect(item)}
                key={item?.title ? item.id : item}
                className={styles.result}
              >
                {item?.title ? item.title : item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
