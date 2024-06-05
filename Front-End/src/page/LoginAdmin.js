import { useState } from 'react';
import { Button, Container, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../style/Login.css";

const LoginAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state

    // Check if all fields are filled
    if (!email || !password) {
      setError("Tolong isi semua field");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token); // Save token to local storage
      navigate("/admindashboard"); // Redirect to admin dashboard
    } catch (error) {
      if (error.response) {
        setError(error.response.data.msg || "Login failed");
      } else {
        setError("Failed to connect to the server");
      }
    }
  };

  return (
    <div className='body-login'>
      <Container fluid className="d-flex align-items-center" style={{ minHeight: '80vh' }}>
        <Form style={{ width: '40%' }} onSubmit={handleLogin}>
          <h1 style={{ color: 'white' }}>Log in Admin</h1>
          <h2 style={{ color: 'white' }}>Selamat datang kembali Admin!</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form.Group controlId="formEmail">
            <Form.Label style={{ fontSize: '30px', color: 'white' }}>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              style={{ fontSize: '30px', color: '#143A52' }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label style={{ fontSize: '30px', color: 'white' }}>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password" 
              style={{ fontSize: '30px', color: '#143A52' }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button 
            style={{ backgroundColor: 'white', color: '#143A52', fontSize: '30px' }} 
            className='mt-3' 
            variant="primary" 
            type="submit"
          >
            Submit
          </Button>
          <hr style={{ color: 'white' }}/>
        </Form>
      </Container>
    </div>
  );
};

export default LoginAdmin;