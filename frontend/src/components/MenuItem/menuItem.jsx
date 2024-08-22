import GlobalContext from '../../context/globalContext';
import Icon from '../Icon/icon';
import style from './menuItem.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

const MenuItem = ({ children, name, link, onClick, type }) => {

  const { activeMenuItem } = useContext(GlobalContext); // Получаем активный маршрут из контекста

  return (
    <Link onClick={onClick} className={style.box} to={link}>
      <Icon active={activeMenuItem === link} >
       
          <div className={style.iconBox}>
            {children}
          
          {type === 'icon' ? '' : <div className={style.name}>{name}</div>}
        </div>
      </Icon>
    </Link>
  );
};

export default MenuItem;
