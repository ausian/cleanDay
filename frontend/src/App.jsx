import { useState, useContext } from 'react'
import style from './App.module.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu/menu'
import Home from './pages/Home/Home'
import My from './pages/My/My'
import BottomPanel from './components/BottomPanel/bottomPanel'
import GlobalContext from './context/globalContext'
import Button from './components/Button/button'
import Clouse from './assets/icons/clouse'
import Send from './assets/icons/send';
import EventManager from './components/EventManager/eventManager';


function App() {

  const {
    activeBottomPanelInput,
    setActiveBottomPanelInput
  } = useContext(GlobalContext);

  const handleClouseBottomPanel = () => {
    setActiveBottomPanelInput(false)
  }

  return (

      <div className={style.container} >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my" element={<My />} />
        </Routes>
        <Menu />
        <BottomPanel
          isActive={activeBottomPanelInput}
          title={'Новая дата'}
          buttonsElements={
            <>
            <Button
              type='icon'
              icon={<Clouse color={'var(--icon-button-color)'} />}
              onClick={handleClouseBottomPanel}
            />
            <Button
              type='icon'
              icon={<Send color={'var(--icon-button-color)'} />}
            />
          </>
          }
        >
          <EventManager />
        </BottomPanel>
      </div>


  )
}

export default App
