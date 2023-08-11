import logo from '/logo.svg';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div>
          <img style={{ width: '50px', height: '50px' }} src={logo} alt='' />
        </div>
        <div>search</div>
      </div>
    </div>
  );
};

export default Navbar;
