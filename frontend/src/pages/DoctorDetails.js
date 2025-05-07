import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';

function DoctorDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState({});
  const [appointmentDate, setAppointmentDate] = useState('');

  useEffect(() => {
    async function fetchDoctor() {
      const res = await api.get(`/doctors/${id}`);
      setDoctor(res.data);
    }
    fetchDoctor();
  }, [id]);

  const handleBooking = async () => {
    try {
      await api.post('/appointments', {
        user_id: 1, // Assuming static logged-in user id = 1 for now
        doctor_id: doctor.id,
        appointment_date: appointmentDate
      });
      alert('Appointment Booked Successfully!');
      navigate('/dashboard');
    } catch (error) {
      alert('Failed to book appointment.');
    }
  };

  return (
    <div className="card">
      <h2>{doctor.name}</h2>
      <p><b>Specialization:</b> {doctor.specialization}</p>
      <p><b>Experience:</b> {doctor.experience} years</p>
      <p><b>Fees:</b> ₹{doctor.fees}</p>

      <input 
        type="date" 
        value={appointmentDate} 
        onChange={(e) => setAppointmentDate(e.target.value)} 
        required 
      />
      <button onClick={handleBooking}>Book Appointment</button>
    </div>
  );
}

export default DoctorDetails;
