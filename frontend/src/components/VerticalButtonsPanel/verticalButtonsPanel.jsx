import style from './verticalButtonsPanel.module.css';

const VerticalButtonsPanel = ({children}) => {
  return (
    <div className={style.box}>
      {children}
    </div>
  );
};

export default VerticalButtonsPanel;
