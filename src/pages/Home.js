// frontend/src/pages/Home.js

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styled Components
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  padding: 0 20px;
`;

const HeaderWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

const Header = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
`;

const SubHeader = styled.h3`
  color: #e0e0e0;
  font-size: 1.5rem;
  margin-bottom: 40px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledButton = styled(Link)`
  padding: 15px 30px;
  background-color: #4c6ef5;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.3s;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #364fc7;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeaderWrapper>
        <Header>File Management System</Header>
      </HeaderWrapper>
      <SubHeader>Navigate to an option below:</SubHeader>
      <ButtonGroup>
        <StyledButton to="/login">Login</StyledButton>
        <StyledButton to="/register">Register</StyledButton>
        <StyledButton to="/upload">File Upload</StyledButton>
      </ButtonGroup>
    </HomeContainer>
  );
};

export default Home;
