import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import styles from './app.module.css';
import ItemList from './components/ItemList';
import CardList from './components/CardList';

function App() {
  const [cardData, setCardData] = useState([]);
  const [selectedCard, setSelectedCard] = useState('');
  const [searchMarker, setSearchMarker] = useState('');

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((data) => setCardData(data))
      .catch((e) => console.log(e));
  };

  const getFilteredItem = () => {
    return [...cardData.filter((item) => item.userId === selectedCard)];
  };

  const markItemAsSeen = (itemId) => {
    const newData = [...cardData];
    const index = newData.findIndex((item) => item.id === itemId);
    newData[index].isVisited = true;
    setCardData(newData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (searchMarker) {
      setTimeout(() => {
        setSearchMarker('');
      }, 5000);
    }
  }, [searchMarker]);

  return (
    <>
      <Navbar
        data={cardData}
        setSearchMarker={setSearchMarker}
        setSelectedCard={setSelectedCard}
      />
      <div className={styles.container}>
        {selectedCard ? (
          <ItemList
            markItemAsSeen={markItemAsSeen}
            selectedCard={selectedCard}
            selectedItems={getFilteredItem()}
            setSelectedCard={setSelectedCard}
            searchMarker={searchMarker}
          />
        ) : (
          <CardList setSelectedCard={setSelectedCard} data={cardData} />
        )}
      </div>
    </>
  );
}

export default App;
