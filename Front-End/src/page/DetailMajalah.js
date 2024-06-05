import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import "../style/DetailMajalah.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/londrina-solid';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const DetailMajalah = () => {
    const { id } = useParams();
    const [majalah, setMajalah] = useState(null);
    const [majalahs, setMajalahs] = useState([]);

    useEffect(() => {
        const fetchMajalah = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/majalahs/${id}`);
                setMajalah(response.data);
            } catch (error) {
                console.error('Error fetching majalah:', error);
            }
        };

        const fetchMajalahs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/majalahs');
                setMajalahs(response.data);
            } catch (error) {
                console.error('Error fetching majalahs:', error);
            }
        };

        fetchMajalah();
        fetchMajalahs();
    }, [id]);

    if (!majalah) return <div>Loading...</div>;

    const filteredMajalahs = majalahs.filter(m => m.id !== parseInt(id)).slice(0, 4);

    return (
        <div className='body'>
            <div className='mt-5'>
                <Container fluid style={{ paddingLeft: '65px' }}>
                    <Link to="/dashboard" className="no-decoration" style={{ color: '#143A52', fontSize: '25px' }}>
                        KEMBALI KE DASHBOARD
                    </Link>
                </Container>
            </div>

            <div className='mt-3'>
                <Container fluid style={{ paddingLeft: '65px' }}>
                    <h1 style={{ color: '#143A52' }}>{majalah.title}</h1>
                </Container>
            </div>

            <div className="container-fluid d-flex align-items-end justify-content-start font-first" style={{ marginTop: '20px' }}>
                <Image src={`http://localhost:5000/uploads/${majalah.image}`} style={{ width: '95%', height: '500px', objectFit: 'cover', borderRadius: '30px' }} alt="banner" className='center-content'/>
            </div>

            <Container fluid style={{ paddingLeft: '65px', paddingRight: '65px' }}>
                <Row>
                    <Col md={8} className="magazine-text">
                        <p className="font-isi text-justify" style={{ color: 'white' }}>
                            {majalah.description}
                        </p>
                    </Col>
                </Row>
            </Container>

            <div className='mt-3'>
                <Container fluid style={{ paddingLeft: '65px' }}>
                    <h1 style={{ color: '#143A52' }}>Postingan Terbaru</h1>
                </Container>
            </div>

            <div className='pb-5'>
                <Container fluid style={{ paddingLeft: '65px', paddingRight: '65px' }}>
                    <Row className='justify-content-center'>
                        {filteredMajalahs.map(maj => (
                            <Col xs={12} md={6} lg={3} className='text-left' key={maj.id}>
                                <Link to={`/detailmajalah/${maj.id}`} className='no-decoration' style={{ color: '#143A52' }}>
                                    <div style={{ position: 'relative', display: 'inline-block', width: '100%', height: '300px', overflow: 'hidden', borderRadius: '10px' }}>
                                        <Image src={`http://localhost:5000/uploads/${maj.image}`} alt={maj.title} className='center-content img-fluid' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        <p className='text-center' style={{ position: 'absolute', bottom: '0', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '10px' }}>{maj.title}</p>
                                    </div>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

            <Container fluid className="d-flex justify-content-center" style={{ marginBottom: '50px' }}>
                <Link to="/majalah">
                    <Button variant="primary" style={{ borderRadius: '10px', padding: '15px 30px', fontSize: '20px' }}>Lihat yang lebih lengkap!</Button>
                </Link>
            </Container>
        </div>
    );
};

export default DetailMajalah;