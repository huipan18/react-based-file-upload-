import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Styled Components
const UploadContainer = styled.div`
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

const FileUpload = () => {
  const [file, setFile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please log in to access this page');
      window.location.href = '/login';
    }
  }, []);

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!file) {
      alert('Please select a file to upload');
      return;
    }
    try {
      const formData = new FormData();
      formData.append('file', file);
      
      const response = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: {
          'x-auth-token': token,
          'Content-Type': 'multipart/form-data',
        }
      });

      if (response.data.msg) {
        alert(response.data.msg);
      } else {
        alert('File uploaded successfully!');
      }
    } catch (err) {
      console.error('Upload Error:', err.response ? err.response.data : err);
      alert(`File upload failed! ${err.response ? err.response.data.msg : ''}`);
    }
  };

  return (
    <UploadContainer>
      <Card>
        <h2>File Upload</h2>
        <form onSubmit={handleFileUpload}>
          <Input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <Button type="submit">Upload</Button>
        </form>
      </Card>
    </UploadContainer>
  );
};

export default FileUpload;
