import React from 'react';
import { Link } from 'react-router-dom';

function DoctorCard({ doctor }) {
  return (
    <div className="card">
      <h2>{doctor.name}</h2>
      <p><b>Specialization:</b> {doctor.specialization}</p>
      <p><b>Experience:</b> {doctor.experience} years</p>
      <p><b>Fees:</b> ₹{doctor.fees}</p>
      <Link to={`/doctor/${doctor.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}

export default DoctorCard;
