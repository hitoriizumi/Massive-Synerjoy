import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Biotalaut = () => {
    const [biotaLauts, setBiotaLauts] = useState([]);

    useEffect(() => {
        fetchBiotaLauts();
    }, []);

    const fetchBiotaLauts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/biota-lauts');
            setBiotaLauts(response.data);
        } catch (error) {
            console.error("There was an error fetching the biota lauts!", error);
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
                    <Link to="/dashboard" className="d-flex align-items-center text-judul no-decoration" style={{ color: '#143A52' }}>
                        KEMBALI KE DASHBOARD
                    </Link>
                </Container>
            </div>

            <div className="font-magazine">
                <Container>
                    <div className="py-5">
                        <div className="text-center mb-3">
                            <h3 style={{ fontSize: '50px', marginBottom: '4%', marginTop: '2%' }}><strong>Biotalaut</strong></h3>
                        </div>
                        <div className='pb-5'>
                            <Container fluid style={{ paddingLeft: '100px', paddingRight: '100px' }}>
                                <Row className='justify-content-center'>
                                    {biotaLauts.map(biota => (
                                        <Col key={biota.id} md={6} lg={4} className='text-left'>
                                            <Link to={`/detailbiotalaut/${biota.id}`} className='no-decoration' style={{ color: '#143A52' }}>
                                                <Image src={`http://localhost:5000/uploads/${biota.image}`} alt={biota.name} className='center-content img-fluid' fluid style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px' }} />
                                                <h2>{biota.name}</h2>
                                                <p>{truncateText(biota.description, 100)}</p>
                                            </Link>
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

export default Biotalaut;