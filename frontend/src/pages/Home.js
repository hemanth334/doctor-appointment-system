import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="card">
      <h1>Welcome to Doctor Appointment System</h1>
      <p>Book appointments with your favorite doctors easily.</p>
      <Link to="/login">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default Home;
