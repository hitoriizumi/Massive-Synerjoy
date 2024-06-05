import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const DetailBiotalaut = () => {
    const { id } = useParams();
    const [biotaLaut, setBiotaLaut] = useState(null);
    const [relatedBiotaLaut, setRelatedBiotaLaut] = useState([]);

    useEffect(() => {
        fetchBiotaLaut();
        fetchRelatedBiotaLaut();
    }, [id]);

    const fetchBiotaLaut = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/biota-lauts/${id}`);
            setBiotaLaut(response.data);
        } catch (error) {
            console.error("There was an error fetching the biota laut!", error);
        }
    };

    const fetchRelatedBiotaLaut = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/biota-lauts');
            const filteredBiotaLauts = response.data.filter(biota => biota.id !== parseInt(id)).slice(0, 4);
            setRelatedBiotaLaut(filteredBiotaLauts);
        } catch (error) {
            console.error("There was an error fetching the related biota laut!", error);
        }
    };

    if (!biotaLaut) {
        return <div>Loading...</div>;
    }

    return (
        <div className='body'>
            <div className='mt-5'>
                <Container fluid style={{ paddingLeft: '65px' }}>
                    <Link to="/biotalaut" className="no-decoration" style={{ color: '#143A52', fontSize: '25px' }}>
                        KEMBALI
                    </Link>
                </Container>
            </div>

            <Container fluid style={{ marginTop: '20px', paddingLeft: '65px', paddingRight: '65px' }}>
                <div style={{ position: 'relative', width: '100%' }}>
                    <Image src={`http://localhost:5000/uploads/${biotaLaut.image}`} style={{ width: '100%', height: '500px', objectFit: 'cover' }} alt="banner" className='center-content' />
                    <div style={{ position: 'absolute', left: '0', bottom: '0', padding: '10px', color: 'white' }}>
                        <p style={{ margin: '0', fontSize: '30px' }}>BIOINFORMASI</p>
                        <h1 style={{ margin: '0' }}>{biotaLaut.name}</h1>
                    </div>
                </div>
            </Container>

            <div style={{ marginTop: '20px', paddingLeft: '65px', paddingRight: '65px' }}>
                <Container fluid className='p-5' style={{ backgroundColor: '#143A52' }}>
                    <Row className="mx-auto align-items-center mb-5">
                        <Col md={3} sm={6}>
                            <div className="mx-auto text-center">
                                <Image src={require('../assets/image/icon-berat.png')} alt="Image 1" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '10px' }} />
                                <div style={{ fontSize: '30px', color: 'white' }}>
                                    {biotaLaut.weight}
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={6}>
                            <div className="mx-auto text-center">
                                <Image src={require('../assets/image/icon-makan.png')} alt="Image 1" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '10px' }} />
                                <div style={{ fontSize: '30px', color: 'white' }}>
                                    {biotaLaut.food}
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={6}>
                            <div className="mx-auto text-center">
                                <Image src={require('../assets/image/icon-ukuran.png')} alt="Image 1" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '10px' }} />
                                <div style={{ fontSize: '30px', color: 'white' }}>
                                    {biotaLaut.size}
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={6}>
                            <div className="mx-auto text-center">
                                <Image src={require('../assets/image/icon-kedalaman.png')} alt="Image 1" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '10px' }} />
                                <div style={{ fontSize: '30px', color: 'white' }}>
                                    {biotaLaut.depth}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container fluid>
                <Row className="justify-content-center">
                    <Col md={11} className="isi-text mx-auto">
                        <h1 className="mt-5" style={{ color: '#143A52', marginBottom: '10px' }}>
                            {biotaLaut.name}
                        </h1>
                        <p align="justify" style={{ color: '#143A52', marginBottom: '10px', fontSize: '30px' }}>
                            {biotaLaut.description}
                        </p>
                    </Col>
                </Row>
            </Container>

            <Container fluid className='py-4' style={{ backgroundColor: '#143A52' }}>
                <Row className="justify-content-center">
                    <Col md={11} className="isi-text mx-auto">
                        <h1 style={{ color: 'white', marginBottom: '10px' }}>
                            FAKTA MENARIK TENTANG {biotaLaut.name}
                        </h1>
                        <p style={{ color: 'white', fontSize: '30px' }}>
                            {biotaLaut.fun_fact}
                        </p>
                    </Col>
                </Row>
            </Container>

            <div className='pb-5'>
                <Container fluid style={{ paddingLeft: '65px', paddingRight: '65px', marginTop: '70px' }}>
                    <Row className='justify-content-center'>
                        {relatedBiotaLaut.map(biota => (
                            <Col key={biota.id} xs={12} md={6} lg={3} className='text-left'>
                                <Link to={`/detailbiotalaut/${biota.id}`} style={{ textDecoration: 'none' }}>
                                    <div style={{ position: 'relative', display: 'inline-block', width: '100%', height: '300px', overflow: 'hidden', borderRadius: '10px' }}>
                                        <Image src={`http://localhost:5000/uploads/${biota.image}`} alt="gambar-laut" className='center-content img-fluid' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        <p className='text-center' style={{ position: 'absolute', bottom: '0', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '10px' }}>{biota.name}</p>
                                    </div>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Container>
                <div className="text-center mt-5">
                    <Link to="/biotalaut">
                        <Button variant="primary" className="mx-auto border-0" style={{ fontSize: '30px' }}>Lihat biota yang lain yuk!</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DetailBiotalaut;