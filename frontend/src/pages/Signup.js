import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/signup', formData);
      alert('Signup Successful!');
      navigate('/login');
    } catch (error) {
      alert('Signup Failed!');
    }
  };

  return (
    <div className="card">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Signup</button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '1rem' }}>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
}

export default Signup;
