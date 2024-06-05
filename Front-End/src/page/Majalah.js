import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../style/Majalah.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/londrina-solid';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const Majalah = () => {
    const [majalahs, setMajalahs] = useState([]);

    useEffect(() => {
        const fetchMajalahs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/majalahs');
                setMajalahs(response.data);
            } catch (error) {
                console.error('Error fetching majalahs:', error);
            }
        };
        fetchMajalahs();
    }, []);

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
                    <Link to="/dashboard" className="no-decoration" style={{ color: '#143A52', fontSize: '25px' }}>
                        KEMBALI KE DASHBOARD
                    </Link>
                </Container>
            </div>

            <div className="font-magazine">
                <div className="container-fluid">
                    <div className="py-5">
                        <div className="text-center mb-3">
                            <h1 style={{ fontSize: '50px', marginBottom: '4%', marginTop: '2%' }}><strong>Majalah</strong></h1>
                        </div>
                        <div className='pb-5'>
                            <Container fluid style={{ paddingLeft: '100px', paddingRight: '100px' }}>
                                <Row className='align-items-center mb-4'>
                                    <Col xs={12}>
                                        <Form.Control type="text" className='mb-4' placeholder="Cari yang lain yuk!" style={{ fontSize: '24px', borderColor: '#143A52', width: '30%' }} />
                                    </Col>
                                </Row>
                                {majalahs.map(majalah => (
                                    <Link to={`/detailmajalah/${majalah.id}`} className='no-decoration' key={majalah.id} style={{ color: '#143A52' }}>
                                        <Row className='align-items-start mb-4'>
                                            <Col xs={12} md={6}>
                                                <div style={{ width: '100%', height: '400px', overflow: 'hidden', borderRadius: '10px' }}>
                                                    <Image src={`http://localhost:5000/uploads/${majalah.image}`} alt={majalah.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                </div>
                                            </Col>
                                            <Col xs={12} md={6}>
                                                <h1 className='mt-4 mt-md-0'>{majalah.title}</h1>
                                                <p className='mt-3' style={{ fontSize: '25px' }}>{truncateText(majalah.description, 600)} Baca lebih lanjut!</p>
                                            </Col>
                                        </Row>
                                        <hr />
                                    </Link>
                                ))}
                            </Container>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Majalah;