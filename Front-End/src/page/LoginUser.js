import { Button, Container, Form, Alert } from 'react-bootstrap';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";

const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State untuk pesan kesalahan login
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State untuk status login
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      // Tanggapan yang berhasil akan mengandung token, simpan token di local storage misalnya
      localStorage.setItem('token', response.data.token);
      setIsLoggedIn(true); // Set status login menjadi true
      navigate("/dashboard");
    } catch (error) {
      // handle login error
      console.log(error.response.data);
      setError("Email atau password salah."); // Atur pesan kesalahan login
    }
  };

  return (
    <div className='body-login'>
      <Container fluid className="d-flex align-items-center" style={{ minHeight: '80vh' }}>
        <Form style={{ width: '40%' }} onSubmit={handleSubmit}>
          <h1 style={{ color: 'white' }}>Log in User</h1>
          {error && <Alert variant="danger">{error}</Alert>} {/* Tampilkan alert jika ada pesan kesalahan */}
          <h2 style={{ color: 'white' }}>Selamat datang kembali! Mohon masukkan informasi akun anda.</h2>
          <Form.Group controlId="formEmail">
            <Form.Label style={{ fontSize: '30px', color: 'white' }}>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" style={{ fontSize: '30px', color: '#143A52' }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label style={{ fontSize: '30px', color: 'white' }}>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" style={{ fontSize: '30px', color: '#143A52' }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button style={{ backgroundColor: 'white', color: '#143A52', fontSize: '30px'}} className='mt-3' variant="primary" type="submit">
            Submit
          </Button>
          <hr style={{ color: 'white' }}/>
          <p style={{ color: 'white', fontSize: '30px' }}>
            Belum memiliki akun? <RouterLink to="/signup" style={{ color: 'grey', textDecoration: 'none' }}>Sign Up </RouterLink>
            Gratis!
          </p>
        </Form>
      </Container>
    </div>
  );
};

export default LoginUser;