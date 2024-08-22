import VerticalButtonsPanel from '../VerticalButtonsPanel/verticalButtonsPanel';
import style from './bottomPanel.module.css';

const BottomPanel = ({children, isActive = false, buttonsElements, title}) => {
  return (
    <div
      style={{ bottom: isActive ? 'var(--small-gap)' : 'calc(-50vh - 62px)' }}
      className={style.box}
    >
      <div
      className={style.boxLeft}
      >
        <h2>{title}</h2>
      {children}
      </div>
      <div
      className={style.boxRight}>
      <VerticalButtonsPanel>
        {buttonsElements}
      </VerticalButtonsPanel>
      </div>
    </div>
  );
};

export default BottomPanel;
