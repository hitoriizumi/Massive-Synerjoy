import React, { useState } from 'react';
import "../style/Komunitas.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/londrina-solid';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

const Komunitas = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [feedback, setFeedback] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertVariant, setAlertVariant] = useState('success');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/feedback', {
                name,
                email,
                phone,
                text: feedback
            });
            if (response.status === 201) {
                setAlertMessage('Feedback kamu sudah terkirim terima kasih!');
                setAlertVariant('success');
                setShowAlert(true);
                setName('');
                setEmail('');
                setPhone('');
                setFeedback('');
            } else {
                setAlertMessage('Failed to submit feedback');
                setAlertVariant('danger');
                setShowAlert(true);
            }
        } catch (error) {
            console.error('There was an error submitting the feedback!', error);
            setAlertMessage('periksa lagi yaa data kalian, harus lengkap hehe!');
            setAlertVariant('danger');
            setShowAlert(true);
        }
    };

    return (
        <div className='body'>
            <div className="container-fluid banner d-flex align-items-end justify-content-start font-first" style={{ marginTop: '50px', marginBottom: '80px' }}>
                <div className="image-container"></div>
                <h1 className="warna7 col-2" style={{ fontSize: '35px', marginBottom: '20px' }}>Explore and Discover<br />All the Wonders of the<br />Ocean</h1>
            </div>

            <Container className="mt-5 mb-5">
                <Row className="text-center">
                    <Col>
                        <h1 style={{ color: '#143A52' }}><strong>Selamat datang sesama komunitas pecinta laut di Indonesia</strong></h1>
                    </Col>
                </Row>
                <Row className="justify-content-center text-center mt-4">
                    <Col md={10}>
                        <p style={{ fontSize: '25px', color: '#143A52' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse porro aut consequatur. 
                            Explicabo quam, amet, eligendi natus omnis itaque vitae excepturi, nesciunt unde voluptate 
                            vel laudantium tempora impedit. Autem, ex.
                        </p>
                    </Col>
                </Row>
            </Container>
            
            <Container className="mb-5" style={{ marginTop: '100px'}}>
                <h1 className='text-center' style={{ color: '#143A52', maxWidth: '300px', margin: '0 auto' }}><strong>Peta & Pesebaran Aquarium di Indonesia</strong></h1>
                <Image src={require('../assets/image/peta-aquarium.png')} alt="gambar-laut" className='center-content img-fluid mt-5' fluid style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
            </Container>

            <Container className="mb-5" style={{ marginTop: '100px'}}>
                <h1 className='text-center' style={{ color: '#143A52', margin: '0 auto' }}><strong>Founder Wave Wounderland</strong></h1>
                <div className="px-5 py-4">
                    <Container fluid className='mt-5'>
                        <Row className="mx-auto align-items-center flex-nowrap justify-content-center">
                            <Col md={3} className="mb-3 text-center">
                                <Image src={require('../assets/image/person.png')} alt="Image 1" style={{ width: '80%', objectFit: 'cover' }} />
                                <p className='my-3' style={{fontSize: '30px', color: '#143A52', margin: '0 auto' }}><strong>Brooklyn Simmons</strong></p>
                                <p style={{fontSize: '30px', color: '#143A52', margin: '0 auto' }}>Founder</p>
                            </Col>
                            <Col md={3} className="mb-3 text-center">
                                <Image src={require('../assets/image/person2.png')} alt="Image 2" style={{ width: '80%', objectFit: 'cover'  }} />
                                <p className='my-3' style={{fontSize: '30px', color: '#143A52', margin: '0 auto' }}><strong>Cameron Williamson</strong></p>
                                <p style={{fontSize: '30px', color: '#143A52', margin: '0 auto' }}>Co-Founder</p>
                            </Col>
                        </Row>
                        <div className="text-center mt-5">
                            <Button variant="primary" className="mx-auto border-0 p-3" style={{ fontSize: '25px' }}>Gabung Sekarang!</Button>
                        </div>
                    </Container>
                </div>
            </Container>

            <Container className="d-flex flex-column align-items-center mt-5 mb-5">
                {showAlert && (
                    <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
                        {alertMessage}
                    </Alert>
                )}
                <Form onSubmit={handleSubmit} className="p-5" style={{ backgroundColor: '#165776', width: '60%', borderRadius: '20px' }}>
                    <Row className="justify-content-center">
                        <Col>
                            <h1 className="text-center" style={{ color: 'white' }}>Rating Us!</h1>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col className="d-flex justify-content-center">
                            <p className="text-center" style={{ color: 'white', fontSize: '25px' }}>for your dive experience! 🐳</p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col>
                            <Form.Group controlId="feedbackName">
                                <Form.Label className="text-left" style={{ color: 'white', fontSize: '25px' }}>Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Enter your name here" 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)} 
                                />
                            </Form.Group>
                            <Form.Group controlId="feedbackEmail">
                                <Form.Label className="text-left" style={{ color: 'white', fontSize: '25px' }}>Email</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    placeholder="Enter your email here" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                />
                            </Form.Group>
                            <Form.Group controlId="feedbackPhone">
                                <Form.Label className="text-left" style={{ color: 'white', fontSize: '25px' }}>Phone</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Enter your phone number here" 
                                    value={phone} 
                                    onChange={(e) => setPhone(e.target.value)} 
                                />
                            </Form.Group>
                            <Form.Group controlId="feedbackText">
                                <Form.Label className="text-left" style={{ color: 'white', fontSize: '25px' }}>Feedback</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Enter your feedback here" 
                                    value={feedback} 
                                    onChange={(e) => setFeedback(e.target.value)} 
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-4">
                        <Col className="text-center">
                            <Button className="border-0 p-3" variant="primary" type="submit">
                                Submit My Feedback
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
};

export default Komunitas;