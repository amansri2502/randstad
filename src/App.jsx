// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import styles from './app.module.css';
import ItemList from './components/ItemList';


function App() {
  const [cardData, setCardData] = useState([]);
  const [selectedCard, setSelectedCard] = useState('');

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((data) => setCardData(data));
  };

  const getUniqueUserId = (data) => {
    return [...new Set(data.map((item) => item.userId))];
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

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {!selectedCard ? (
          cardData.length > 0 &&
          getUniqueUserId(cardData).map((item) => (
            <div key={item} onClick={() => setSelectedCard(item)}>
              {item}
            </div>
          ))
        ) : (
          <ItemList
            markItemAsSeen={markItemAsSeen}
            selectedCard={selectedCard}
            selectedItems={getFilteredItem()}
            setSelectedCard={setSelectedCard}
          />
        )}
      </div>
    </>
  );
}

export default App;
