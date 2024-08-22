import Loader from '../../assets/icons/loader';
import style from './header.module.css';

const Header = ({ children }) => {



  return (
    <div className={style.box}>
      {children}
    </div>
  );
};

export default Header;
