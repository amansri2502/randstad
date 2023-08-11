/* eslint-disable react/prop-types */
import styles from './cardList.module.css';

const CardList = ({ data,setSelectedCard }) => {


  const getUniqueUserId = () => {
    return [...new Set(data.map((item) => item.userId))];
  };

  const findUnvisitedItemCount=(id)=>{
    return data.filter((item)=>item.userId===id && !item.isVisited).length
  }


  return (
    <div className={styles.container}>
      {getUniqueUserId().map((item) => (
        <div onClick={()=>setSelectedCard(item)} key={item} className={styles.item}>
          <div className={styles.cardNumber}>
            {item}
          </div>
          <span>{`Card ${item}`}</span>
          <div className={styles.notification}>{findUnvisitedItemCount(item)}</div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
