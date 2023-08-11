/* eslint-disable react/prop-types */
import logo from '/logo.svg';
import styles from './navbar.module.css';
import SearchBar from '../SearchBar';

const Navbar = ({data,setSelectedCard,setSearchMarker}) => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div>
          <img style={{ width: '50px', height: '50px' }} src={logo} alt='' />
        </div>
        <SearchBar setSearchMarker={setSearchMarker} setSelectedCard={setSelectedCard} data={data}/>
      </div>
    </div>
  );
};

export default Navbar;
