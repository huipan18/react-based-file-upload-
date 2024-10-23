import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Styled Components
const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #6d83f3, #4a55e1);
`;

const Card = styled.div`
  padding: 40px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #4a55e1;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: #3b45c1;
  }
`;

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', { email, password });
      localStorage.setItem('token', res.data.token);
      alert('Registration successful!');
      window.location.href = '/login';
    } catch (err) {
      alert('Registration failed!');
    }
  };

  return (
    <RegisterContainer>
      <Card>
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <Input 
            type="email" 
            placeholder="Email" 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <Input 
            type="password" 
            placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <Button type="submit">Register</Button>
        </form>
      </Card>
    </RegisterContainer>
  );
};

export default Register;
