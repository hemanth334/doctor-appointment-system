import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

function Dashboard() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    async function fetchDoctors() {
      const res = await api.get('/doctors');
      setDoctors(res.data);
    }
    fetchDoctors();
  }, []);

  return (
    <div>
      <h1>Available Doctors</h1>
      {doctors.map((doctor) => (
        <div key={doctor.id} className="card">
          <h2>{doctor.name}</h2>
          <p><b>Specialization:</b> {doctor.specialization}</p>
          <p><b>Experience:</b> {doctor.experience} years</p>
          <p><b>Fees:</b> ₹{doctor.fees}</p>
          <Link to={`/doctor/${doctor.id}`}>
            <button>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
