import Loader from '../../assets/icons/loader';
import style from './button.module.css';

const Button = ({type = 'default', icon, name, onClick, loader = false}) => {

  let boxStyle = {};

  if (type === 'icon') {
    boxStyle = { display: 'flex', gap: '10px', flexDirection: 'column', width: '40px', height: '40px' };
  } else if (type === 'default') {
    boxStyle = { display: 'flex', gap: '10px' };
  }

  return (
    <div style={boxStyle} className={style.box} onClick={onClick}>
      <div className={style.icon}>
       {loader ? <Loader color={'var(--icon-button-color)'} /> : icon}
      </div>
     {type != 'icon' && <div>
        {name}
      </div>}
    </div>
  );
};

export default Button;
