import React from 'react';
import "../style/Dashboard.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/londrina-solid';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='body'>
        <div className="container-fluid banner d-flex align-items-end justify-content-start font-first" style={{ marginTop: '50px', marginBottom: '80px' }}>
          <div className="image-container"></div>
          <h1 className="warna7 col-2" style={{ fontSize: '35px', marginBottom: '20px' }}>Explore and Discover<br />All the Wonders of the<br />Ocean</h1>
        </div>
  
        <Container className="px-5 font-about">
            <Container className="py-5">
                <Row className="mx-auto align-items-center">
                    <Col md={6} className="d-none d-md-block position-relative">
                        <Image src={require('../assets/image/belakang.png')} alt="Profile" className="px-4 w-100" />
                        <Image src={require('../assets/image/shark.gif')} alt="New Image" className="position-absolute melayang1" style={{ width: '75%', borderRadius: '10px' }} />
                        <Image src={require('../assets/image/shark.png')} alt="New Image" className="position-absolute melayang2 translate-middle-x" style={{ width: '100%' }} />
                        <Image src={require('../assets/image/logo shark.png')} alt="New Image" className="position-absolute melayang3 translate-middle-x" style={{ width: '20%' }} />
                    </Col>
                    <Col md={6} className="px-4 d-flex flex-column justify-content-center">
                        <h1 style={{ color: '#143A52' }}><strong>Ikan Hiu</strong></h1>
                        <h3 style={{ fontSize: '30px',color: '#143A52' }}><strong>BIOTALAUT</strong></h3>
                        <p style={{ fontSize: '20px',color: '#143A52' }}>
                            Ubah rasa takut Anda menjadi ketertarikan. sesuaikan diri Anda dan masuklah ke dalam air bersama hiu-hiu kita!
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', overflowX: 'auto', whiteSpace: 'nowrap' }} className="mb-3">
                            <Col md={3} className="mb-3">
                                <Image src={require('../assets/image/slider1 fix.png')} alt="Slider Image 1" style={{ width: '100%', borderRadius: '10px' }} />
                                <p style={{ fontSize: '14px' }}>Hiu Singa</p>
                            </Col>
                            <Col md={3} className="mb-3">
                                <Image src={require('../assets/image/slider1 fix.png')} alt="Slider Image 1" style={{ width: '100%', borderRadius: '10px' }} />
                                <p style={{ fontSize: '14px' }}>Hiu Singa 1</p>
                            </Col>
                            <Col md={3} className="mb-3">
                                <Image src={require('../assets/image/slider1 fix.png')} alt="Slider Image 1" style={{ width: '100%', borderRadius: '10px' }} />
                                <p style={{ fontSize: '14px' }}>Hiu Singa 1</p>
                            </Col>
                            <Col md={3} className="mb-3">
                                <Image src={require('../assets/image/slider1 fix.png')} alt="Slider Image 1" style={{ width: '100%', borderRadius: '10px' }} />
                                <p style={{ fontSize: '14px' }}>Hiu Singa 1</p>
                            </Col>
                            <Col md={3} className="mb-3">
                                <Image src={require('../assets/image/slider1 fix.png')} alt="Slider Image 1" style={{ width: '100%', borderRadius: '10px' }} />
                                <p style={{ fontSize: '14px' }}>Hiu Singa 1</p>
                            </Col>
                            <Col md={3} className="mb-3">
                                <Image src={require('../assets/image/slider1 fix.png')} alt="Slider Image 1" style={{ width: '100%', borderRadius: '10px' }} />
                                <p style={{ fontSize: '14px' }}>Hiu Singa 1</p>
                            </Col>
                            <Col md={3} className="mb-3">
                                <Image src={require('../assets/image/slider1 fix.png')} alt="Slider Image 1" style={{ width: '100%', borderRadius: '10px' }} />
                                <p style={{ fontSize: '14px' }}>Hiu Singa 1</p>
                            </Col>
                        </div>
                    </Col>
                </Row>
                <div className="text-center mt-5">
                <Link to="/biotalaut">
                    <Button variant="primary" className="mx-auto border-0" style={{ fontSize: '20px' }}>Eksplor Hewan Lainnya</Button>
                </Link>
                </div>
            </Container>
        </Container>

        <div className="banner2 d-flex align-items-center justify-content-center">
            <div className="px-5 font-statistik">
                <Container fluid className='p-5'>
                    <Row className="mx-auto align-items-center">
                        <Col md={3} sm={6} className="mb-3">
                            <Card border="0" style={{ backgroundColor: 'transparent' }}>
                                <Card.Img variant="top" src={require('../assets/image/icon1.png')} alt="Image 1" style={{ width: '30%', objectFit: 'cover', borderRadius: '10px' }} />
                                <Card.Body>
                                <Card.Text style={{ fontSize: '18px', color: 'white' }}>
                                    Explore this underwater wonderland across the archipelago, each a gateway to learning about and conserving our precious aquatic worlds.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} sm={6} className="mb-3">
                            <Card border="0" style={{ backgroundColor: 'transparent' }}>
                                <Card.Img variant="top" src={require('../assets/image/icon2.png')} alt="Image 2" style={{ width: '30%', objectFit: 'cover', borderRadius: '10px' }} />
                                <Card.Body>
                                <Card.Text style={{ fontSize: '18px', color: 'white' }}>
                                    Explore this underwater wonderland across the archipelago, each a gateway to learning about and conserving our precious aquatic worlds.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} sm={6} className="mb-3">
                            <Card border="0" style={{ backgroundColor: 'transparent' }}>
                                <Card.Img variant="top" src={require('../assets/image/icon3.png')} alt="Image 3" style={{ width: '30%', objectFit: 'cover', borderRadius: '10px' }} />
                                <Card.Body>
                                <Card.Text style={{ fontSize: '18px', color: 'white' }}>
                                    Explore this underwater wonderland across the archipelago, each a gateway to learning about and conserving our precious aquatic worlds.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} sm={6} className="mb-3">
                            <Card border="0" style={{ backgroundColor: 'transparent' }}>
                                <Card.Img variant="top" src={require('../assets/image/icon4.png')} alt="Image 4" style={{ width: '30%', objectFit: 'cover', borderRadius: '10px' }} />
                                <Card.Body>
                                <Card.Text style={{ fontSize: '18px', color: 'white' }}>
                                    Explore this underwater wonderland across the archipelago, each a gateway to learning about and conserving our precious aquatic worlds.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

        <Container>
          <div className="py-5" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
            <div className="text-center mb-3">
              <h3 style={{ fontSize: '50px', marginTop: '2%', color: '#143A52' }}><strong>FAKTA UNIK</strong></h3>
              <p style={{ fontSize: '30px', color: '#143A52' }}>Flip kartu dibawah untuk mengetahui fakta yang sebenarnya!</p>
            </div>
            <div >
              <Row className="justify-content-center">
                <Col className="text-center">
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <p className='font-fact'>Apakah benar bahwa Pinguin merupakan hewan setia?</p>
                      </div>
                      <div className="flip-card-back">
                        <p className="font-fact">Wahh benar tuh pinguin itu hewan yang setia loh teman-teman!, semoga kamu juga ya hehe</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className=" text-center">
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front2">
                        <p className="font-fact">Apakah benar bahwa Pinguin merupakan hewan setia?</p>
                      </div>
                      <div className="flip-card-back2">
                        <p className="font-fact">Wahh benar tuh pinguin itu hewan yang setia loh teman-teman!, semoga kamu juga ya hehe</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className=" text-center">
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front3">
                        <p className="font-fact">Apakah benar bahwa Pinguin merupakan hewan setia?</p>
                      </div>
                      <div className="flip-card-back3">
                        <p className="font-fact">Wahh benar tuh pinguin itu hewan yang setia loh teman-teman!, semoga kamu juga ya hehe</p>
                      </div>
                    </div>
                  </div>
                </Col>
  
                <div className="col text-center">
                  <a href="biotalaut.html">
                    <Image className="final" src={require('../assets/image/final flip.png')} alt="Image 5 " />
                  </a>
                </div>
              </Row>
            </div>
          </div>
        </Container>

        <div className="banner2 d-flex align-items-center justify-content-center">
            <div className="px-5 py-4">
                <Container fluid>
                    <Row className="mx-auto align-items-center flex-nowrap justify-content-center">
                        <Col md={6} className="mb-3 text-center">
                            <Image src={require('../assets/image/natgeo.png')} alt="Image 1" style={{ width: '70%', objectFit: 'cover' }} />
                        </Col>
                        <Col md={6} className="mb-3 text-center">
                            <Image src={require('../assets/image/penjaga.png')} alt="Image 2" style={{ width: '60%', objectFit: 'cover'  }} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
  
        <div className="d-flex align-items-center justify-content-center" style={{ height: '30vh', backgroundColor: '#E3EFF3' }}>
            <Container>
                {/* nothing */}
            </Container>
        </div>

      </div>
    );
  };
  
  export default Dashboard;