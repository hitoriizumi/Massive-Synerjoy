import React, { useEffect, useState } from 'react';
import "../style/ListMajalah.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/londrina-solid';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ListMajalah = () => {
    const navigate = useNavigate();
    const [majalahs, setMajalahs] = useState([]);
    const [name, setName] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/majalahs');
                setMajalahs(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();

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

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/majalahs/${id}`);
            setMajalahs(majalahs.filter(majalah => majalah.id !== id));
        } catch (error) {
            console.error('Error deleting majalah:', error);
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
                        <h3 style={{ fontSize: '50px', marginBottom: '4%', marginTop: '2%' }}><strong>Halo {name}</strong></h3>
                            <h3 style={{ fontSize: '50px', marginBottom: '4%', marginTop: '2%' }}><strong>List Majalah Admin</strong></h3>
                        </div>
                        <div className='pb-5'>
                            <Container fluid style={{ paddingLeft: '100px', paddingRight: '100px' }}>
                                <Row className='justify-content-center'>
                                    {majalahs.map(majalah => (
                                        <Col key={majalah.id} md={6} lg={4} className='text-left mb-4'>
                                                <Image
                                                    src={`http://localhost:5000/uploads/${majalah.image}`}
                                                    alt={majalah.title}
                                                    className='center-content img-fluid'
                                                    style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px' }}
                                                />
                                                <h2 style={{ color: '#143A52' }}>{majalah.title}</h2>
                                                <p style={{ color: '#143A52' }}>{truncateText(majalah.description, 100)}</p>
                                            <div className='mb-4'>
                                            <Link to={`/editmajalah/${majalah.id}`} className='no-decoration'>
                                                <Button variant="primary">Edit</Button>
                                            </Link>
                                                <Button
                                                    style={{ marginLeft: '10px' }}
                                                    variant="danger"
                                                    onClick={() => handleDelete(majalah.id)}
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

export default ListMajalah;