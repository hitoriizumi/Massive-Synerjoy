import React, { useEffect, useState } from 'react';
import "../style/ListBiotalaut.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/londrina-solid';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ListBiotalaut = () => {
    const navigate = useNavigate();
    const [biotaLauts, setBiotaLauts] = useState([]);
    const [userName, setUserName] = useState("");

    useEffect(() => {
        fetchProfile();
        fetchBiotaLauts();
    }, []);

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
            setUserName(response.data.name);
        } catch (error) {
            console.error(error);
            navigate("/loginadmin");
        }
    };

    const fetchBiotaLauts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/biota-lauts');
            setBiotaLauts(response.data);
        } catch (error) {
            console.error("There was an error fetching the biota lauts!", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/biota-lauts/${id}`);
            fetchBiotaLauts();  // Refresh list after deletion
        } catch (error) {
            console.error("There was an error deleting the biota laut!", error);
        }
    };

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    };

    return (
        <div className='body'>
            <div className='mt-5'>
                <Container fluid style={{ paddingLeft: '100px', paddingRight: '100px' }}>
                    <Button className='border-0' style={{ color: 'white', fontSize: '25px' }} onClick={() => navigate(-1)}>
                        KEMBALI
                    </Button>
                </Container>
            </div>

            <div className="font-magazine">
                <Container>
                    <div className="py-5">
                        <div className="text-center mb-3">
                            <h3 style={{ fontSize: '50px', marginBottom: '4%', marginTop: '2%' }}>Halo {userName}</h3>
                            <h3 style={{ fontSize: '50px', marginBottom: '4%', marginTop: '2%' }}><strong>List Biotalaut Admin</strong></h3>
                        </div>
                        <div className='pb-5'>
                            <Container fluid style={{ paddingLeft: '100px', paddingRight: '100px' }}>
                                <Row className='justify-content-center'>
                                    {biotaLauts.map(biota => (
                                        <Col key={biota.id} md={6} lg={4} className='text-left'>
                                            <Image 
                                                src={`http://localhost:5000/uploads/${biota.image}`} 
                                                alt={biota.name} 
                                                className='center-content img-fluid' 
                                                fluid 
                                                style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px' }} 
                                            />
                                            <h2 style={{ color: '#143A52' }}>{biota.name}</h2>
                                            <p style={{ color: '#143A52' }}>{truncateText(biota.description, 100)}</p>
                                            <div className='mb-4'>
                                                <Link to={`/editbiotalaut/${biota.id}`} className='no-decoration'>
                                                    <Button variant="primary">Edit</Button>
                                                </Link>
                                                <Button 
                                                    style={{ marginLeft: '10px' }} 
                                                    variant="danger" 
                                                    onClick={() => handleDelete(biota.id)}
                                                >
                                                    Delete
                                                </Button>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </Container>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default ListBiotalaut;