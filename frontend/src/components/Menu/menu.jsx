import { useContext, useEffect } from 'react';
import MenuItem from '../MenuItem/menuItem';
import HomeIcon from '../../assets/icons/home';
import AddIcon from '../../assets/icons/add';
import PersonIcon from '../../assets/icons/person';
import style from './menu.module.css';
import GlobalContext from '../../context/globalContext';

const Menu = () => {
  const { setActiveBottomPanelInput, activeBottomPanelInput } = useContext(GlobalContext);

  const handleAddClick = () => {
    setActiveBottomPanelInput(true);
  };

  return (
    <div className={style.box}>
      <div className={style.boxLeft}>
      <MenuItem
        name={'Home'}
        type='icon'
        link={'/'}
      >
        <HomeIcon  color='var(--icon-menu-color)' />
      </MenuItem>
      <MenuItem
        name={'My'}
        type='icon'
        link={'/my'}
      >
        <PersonIcon color='var(--icon-menu-color)' />
      </MenuItem>
      </div>

      <div className={style.boxRight}>
      <MenuItem onClick={handleAddClick}
      type='icon'
        name={'Add'}
      >
        <AddIcon  color='var(--icon-menu-color)'/>
      </MenuItem>
      </div>
    </div>
  );
};

export default Menu;
