import React from 'react';
import "../style/Komunitas.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/londrina-solid';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AdminorUser = () => {
    const navigate = useNavigate();

    return (
        <div className='body'>

            <Container fluid className="banner d-flex align-items-end justify-content-start font-first" style={{ marginTop: '50px', marginBottom: '30px' }}>
                <div className="image-container"></div>
                <h1 className="warna7 col-2" style={{ fontSize: '35px', marginBottom: '20px' }}>Explore and Discover<br />All the Wonders of the<br />Ocean</h1>
            </Container>

            <div>
                <Container fluid style={{ paddingLeft: '120px' }}>
                    <Button className='border-0' style={{ color: 'white', fontSize: '25px' }} onClick={() => navigate(-1)}>
                        KEMBALI
                    </Button>
                </Container>
            </div>

            <Container className="mt-5 mb-5">
                <Row className="text-center">
                    <Col>
                        <h1 style={{ color: '#143A52' }}><strong>Selamat Datang Admin & User</strong></h1>
                    </Col>
                </Row>
            </Container>

            <Container className="mb-5">
                <h1 className='text-center' style={{ color: '#143A52', margin: '0 auto' }}><strong>Silahkan Memilih!</strong></h1>
                <div className="px-5 py-4">
                    <Container fluid className='mt-5'>
                        <Row className="mx-auto align-items-center flex-nowrap justify-content-center">
                            <Col md={3} className="mb-3 text-center">
                                <Image src={require('../assets/image/user-icon.jpg')} alt="Image 1" style={{ width: '80%', objectFit: 'cover', borderRadius: '100%' }} />
                                <h1 className='my-3' style={{ color: '#143A52', margin: '0 auto' }}><strong>User</strong></h1>
                                <Link to="/loginuser">
                                    <Button variant="primary" className="mx-auto border-0 p-3" style={{ fontSize: '25px', }}>login</Button>
                                </Link>
                            </Col>
                            <Col md={3} className="mb-3 text-center">
                                <Image src={require('../assets/image/admin-icon.jpg')} alt="Image 2" style={{ width: '80%', objectFit: 'cover', borderRadius: '100%' }} />
                                <h1 className='my-3' style={{ color: '#143A52', margin: '0 auto' }}><strong>Admin</strong></h1>
                                <Link to="/loginadmin">
                                    <Button variant="primary" className="mx-auto border-0 p-3" style={{ fontSize: '25px', }}>login</Button>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </div>
    );
  };
  
  export default AdminorUser;