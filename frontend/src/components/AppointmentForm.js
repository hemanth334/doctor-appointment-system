import React, { useState } from 'react';

function AppointmentForm({ onBook }) {
  const [appointmentDate, setAppointmentDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onBook(appointmentDate);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="date" 
        value={appointmentDate} 
        onChange={(e) => setAppointmentDate(e.target.value)} 
        required 
      />
      <button type="submit">Book Appointment</button>
    </form>
  );
}

export default AppointmentForm;
