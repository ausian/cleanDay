import React, { useContext, useState } from 'react';
import GlobalContext from '../../context/globalContext';


const EventManager = () => {
  const { addEvent, deleteEvent, updateEvent, fetchUserData } = useContext(GlobalContext);
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventId, setEventId] = useState('');

  const handleAddEvent = () => {
    addEvent(eventName, eventDate);
    fetchUserData()
  };

  const handleDeleteEvent = () => {
    deleteEvent(eventId);
  };

  const handleUpdateEvent = () => {
    updateEvent(eventId, eventName, eventDate);
  };

  return (
    <div>
      
      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <input
        type="date"
        value={eventDate}
        onChange={(e) => setEventDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Event ID (for delete/update)"
        value={eventId}
        onChange={(e) => setEventId(e.target.value)}
      />
      <button onClick={handleAddEvent}>Add Event</button>
      <button onClick={handleDeleteEvent}>Delete Event</button>
      <button onClick={handleUpdateEvent}>Update Event</button>
    </div>
  );
};

export default EventManager;
