import style from './icon.module.css';

const Icon = ({active = false, children}) => {
  return (
    <div className={active ? style.inverted : style.box}>
      {children}
    </div>
  );
};

export default Icon;
