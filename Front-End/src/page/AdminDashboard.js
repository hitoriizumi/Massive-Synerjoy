import React, { useEffect, useState } from 'react';
import "../style/AdminDashboard.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    navigate("/loginadmin");
                    return;
                }
                const response = await axios.get("http://localhost:5000/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setName(response.data.name);
            } catch (error) {
                console.error(error);
                navigate("/loginadmin");
            }
        };

        fetchProfile();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove token from local storage
        navigate("/loginadmin"); // Redirect to login page
    };

    return (
        <div className='body'>
            <div className="container-fluid banner d-flex align-items-end justify-content-start font-first" style={{ marginTop: '50px', marginBottom: '30px' }}>
                <div className="image-container"></div>
                <h1 className="warna7 col-2" style={{ fontSize: '35px', marginBottom: '20px' }}>Explore and Discover<br />All the Wonders of the<br />Ocean</h1>
            </div>

            <div>
                <Container fluid style={{ paddingLeft: '120px' }}>
                    <Button className='border-0 ms-3' style={{ color: 'white', fontSize: '25px' }} onClick={handleLogout}>
                        LOGOUT
                    </Button>
                </Container>
            </div>

            <div className="admin-dashboard">
                <div>
                    <h1>Admin Dashboard</h1>
                    <h2>Welcome, {name}</h2>
                </div>
                <main>
                    <section className="options me-3">
                    <h2>Buat Konten Baru</h2>
                    <ul>
                        <li>
                            <Link to="/crudmajalah">
                                <button className="btn-create">
                                    Buat Magazine
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/crudbiotalaut">
                                <button className="btn-create">
                                    Buat Biotalaut
                                </button>
                            </Link>
                        </li>
                    </ul>
                    </section>
                    <section className="options">
                    <h2>Lihat List Konten</h2>
                    <ul>
                        <li>
                        <Link to="/listmajalah">
                            <button className="btn-view">
                                List Majalah
                            </button>
                        </Link>
                        </li>
                        <li>
                        <Link to="/listbiotalaut">
                            <button className="btn-view">
                                List Biotalaut
                            </button>
                        </Link>
                        </li>
                    </ul>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;