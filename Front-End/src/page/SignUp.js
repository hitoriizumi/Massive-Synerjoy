import { Button, Container, Form } from 'react-bootstrap';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/Login.css";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        setError(""); // Reset error state

        // Check if all fields are filled
        if (!name || !email || !password) {
            setError("Tolong isi semua field");
            return;
        }

        try {
          await axios.post("http://localhost:5000/users", {
            name,
            email,
            password,
            role: 'admin' // Ensure role is set to 'admin'
          });
          navigate("/loginadmin"); // Redirect to login page
        } catch (error) {
          if (error.response) {
            setError(error.response.data.msg || "Sign up gagal");
          } else {
            setError("Failed to connect to the server");
          }
        }
    };

    return (
        <div className='body-login'>
            <Container fluid className="d-flex align-items-center" style={{ minHeight: '80vh' }}>
                <Form style={{ width: '40%' }} onSubmit={saveUser}>
                    <h1 style={{ color: 'white' }}>SIGN UP</h1>
                    <h2 style={{ color: 'white' }}>Selamat Datang! Masukkan Informasi anda untuk membuat akun.</h2>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <Form.Group controlId="formNama">
                        <Form.Label style={{ fontSize: '30px', color: 'white' }}>Masukkan Nama</Form.Label>
                        <Form.Control type="text" placeholder="Nama" style={{ fontSize: '30px', color: '#143A52' }} 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label style={{ fontSize: '30px', color: 'white' }}>Masukkan Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" style={{ fontSize: '30px', color: '#143A52' }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                        <Form.Label style={{ fontSize: '30px', color: 'white' }}>Masukkan Password</Form.Label>
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
                      Sudah memiliki akun? <RouterLink to="/loginadmin" style={{ color: 'grey', textDecoration: 'none' }}>Login</RouterLink>
                    </p>
                </Form>
            </Container>
        </div>
    );
};

export default SignUp;