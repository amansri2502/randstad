/* eslint-disable react/prop-types */
import styles from './itemList.module.css';
import back from '/icons/back.svg';

const ItemList = ({
  selectedCard,
  selectedItems = [],
  markItemAsSeen,
  setSelectedCard,
}) => {
  return (
    <div className={styles.row}>
      <img
        onClick={() => setSelectedCard('')}
        className={styles.backButton}
        src={back}
        alt='back'
      />
      <div className={styles.title}>{`Card Number: ${selectedCard}`}</div>
      <div className={styles.listContainer}>
        {selectedItems.map((item) => (
          <div onClick={() => markItemAsSeen(item.id)} key={item.id}className={`${styles.listItem} ${item.isVisited && styles.visitedItem}`}>
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};
export default ItemList;
