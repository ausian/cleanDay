import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import GlobalContext from './globalContext';
import axios from 'axios';

const GlobalProvider = ({ children }) => {
  const [activeBottomPanelInput, setActiveBottomPanelInput] = useState(false);
  const [userDataTG, setUserDataTG] = useState({});
  const [userData, setUserData] = useState({});
  const [activeMenuItem, setActiveMenuItem] = useState('/');
  const [logs, setLogs] = useState([]); // Состояние для хранения логов
  const initialized = useRef(false); // Для предотвращения повторной инициализации

  const location = useLocation();

  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
  const testID = import.meta.env.VITE_TEST_ID;


  // Функция для добавления логов
  const addLog = (message) => {
    setLogs((prevLogs) => [...prevLogs, message]);
  };

  // Функция для получения данных пользователя по tg_id
  const fetchUserData = useCallback(async (id) => {
    addLog('Function fetchUserData called with id: ' + JSON.stringify(id));
    addLog('api: ' + JSON.stringify(apiUrl));

    try {
      const response = await axios.get(`${apiUrl}/api/users/${id}`);
      addLog('Response from server: ' + JSON.stringify(response.data));
      
      setUserData(response.data);
      addLog('userData after setting: ' + JSON.stringify(response.data));
    } catch (err) {
      addLog('Error fetching user data: ' + err.message);
    }
  }, []);

  useEffect(() => {
    if (initialized.current) {
      return;
    }
    initialized.current = true;

    addLog('useEffect for Telegram WebApp initialization called');

    if (window.Telegram && window.Telegram.WebApp) {
      addLog('Telegram WebApp API is available');

      window.Telegram.WebApp.ready();
      addLog('Telegram WebApp API is ready');
  
      const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe;
      addLog('initDataUnsafe: ' + JSON.stringify(initDataUnsafe));

      const user = initDataUnsafe?.user || {};
      setUserDataTG(user);
      addLog('userDataTG after setting: ' + JSON.stringify(user));

      if (user.id) {
        addLog('User ID found, fetching user data');
        fetchUserData(user.id);
      } else {
        addLog('No user ID found, using fallback ID');
        fetchUserData(testID);
      }
    } else {
      addLog('Telegram WebApp API is not available');
    }
  }, [fetchUserData]);

  useEffect(() => {
    if (location.pathname !== activeMenuItem) {
      addLog('Location changed, updating active menu item: ' + location.pathname);
      setActiveMenuItem(location.pathname);
    }
  }, [location.pathname, activeMenuItem]);

  // Функция для добавления события
  const addEvent = useCallback(async (eventName, date) => {
    addLog('addEvent called with eventName: ' + eventName + ', date: ' + date);

    try {
      const response = await axios.post(`http://localhost:5000/api/events/${userDataTG.id}`, { eventName, date });
      addLog('Event added, response: ' + JSON.stringify(response.data));
    } catch (err) {
      addLog('Error adding event: ' + err.message);
    }
  }, [userDataTG.id]);

  // Функция для удаления события
  const deleteEvent = useCallback(async (eventId) => {
    addLog('deleteEvent called with eventId: ' + eventId);

    try {
      await axios.delete(`http://localhost:5000/api/events/${eventId}`);
      addLog('Event deleted successfully');
    } catch (err) {
      addLog('Error deleting event: ' + err.message);
    }
  }, []);

  // Функция для редактирования события
  const updateEvent = useCallback(async (eventId, eventName, date) => {
    addLog('updateEvent called with eventId: ' + eventId + ', eventName: ' + eventName + ', date: ' + date);

    try {
      const response = await axios.put(`http://localhost:5000/api/events/${eventId}`, { eventName, date });
      addLog('Event updated, response: ' + JSON.stringify(response.data));
    } catch (err) {
      addLog('Error updating event: ' + err.message);
    }
  }, []);

  return (
    <GlobalContext.Provider value={{
      activeBottomPanelInput,
      setActiveBottomPanelInput,
      userData,
      userDataTG,
      setUserData,
      setUserDataTG,
      addEvent,
      deleteEvent,
      updateEvent,
      fetchUserData,
      activeMenuItem,
      setActiveMenuItem
    }}>
      {children}
      <LogViewer logs={logs} /> {/* Компонент для отображения логов */}
    </GlobalContext.Provider>
  );
};

// Компонент для отображения логов
const LogViewer = ({ logs }) => {
  const logRef = useRef();

  const copyLogs = () => {
    const logText = logs.join('\n');
    navigator.clipboard.writeText(logText).then(() => {
      alert('Logs copied to clipboard');
    }).catch(err => {
      alert('Failed to copy logs: ' + err);
    });
  };

  return (
    <div style={{ 
      position: 'fixed', 
      bottom: 0, 
      width: '100%', 
      maxHeight: '200px', 
      overflowY: 'scroll', 
      backgroundColor: 'rgba(0, 0, 0, 0.8)', 
      color: 'white', 
      padding: '10px', 
      fontSize: '12px', 
      zIndex: 9999,
      display: 'none'
    }}>
      <h4 style={{ margin: 0 }}>Logs:</h4>
      <pre ref={logRef}>{logs.join('\n')}</pre>
      <button onClick={copyLogs} style={{ marginTop: '10px' }}>Copy Logs</button>
    </div>
  );
};

export default GlobalProvider;
