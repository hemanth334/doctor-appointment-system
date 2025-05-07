import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/login', formData);
      alert('Login Successful!');
      navigate('/dashboard');
    } catch (error) {
      alert('Invalid Credentials!');
    }
  };

  return (
    <div className="card">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '1rem' }}>Don't have an account? <a href="/signup">Signup</a></p>
    </div>
  );
}

export default Login;
