import React, { useState, useEffect } from 'react';
import "../style/Edukasi.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/londrina-solid';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Edukasi = () => {
    const [majalahs, setMajalahs] = useState([]);

    useEffect(() => {
        const fetchMajalahs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/majalahs');
                setMajalahs(response.data.slice(0, 6)); // Hanya mengambil 6 majalah pertama
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
            <div className="container-fluid banner d-flex align-items-end justify-content-start font-first" style={{ marginTop: '50px', marginBottom: '80px' }}>
                <div className="image-container"></div>
                <h1 className="warna7 col-2" style={{ fontSize: '35px', marginBottom: '20px' }}>Explore and Discover<br />All the Wonders of the<br />Ocean</h1>
            </div>

            <div className="bg font-majalah">
            <div className="container-fluid">
                <div className="py-5">
                    <div className="text-center mb-3">
                        <h3 style={{ fontSize: '50px', marginBottom: '4%', marginTop: '2%' }}><strong>MAJALAH</strong></h3>
                    </div>
                    <div className='section3 pb-5'>
                        <Container fluid style={{ paddingLeft: '100px', paddingRight: '100px' }}>
                            <h1 className='judul'>Jelajahi Majalah Kami!</h1>
                            <Row className='justify-content-center'>
                                {majalahs.map(majalah => (
                                    <Col md={6} lg={4} className='text-left' key={majalah.id}>
                                        <Link to={`/detailmajalah/${majalah.id}`} className='no-decoration' style={{ color: 'white' }}>
                                            <div className="image-container" style={{ width: '100%', height: '400px', overflow: 'hidden' }}>
                                                <Image src={`http://localhost:5000/uploads/${majalah.image}`} alt={majalah.title} className='center-content img-fluid' fluid style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </div>
                                            <h2>{majalah.title}</h2>
                                            <p>{truncateText(majalah.description, 200)}</p>
                                        </Link>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </div>
                    <div className="text-center mt-3">
                        <Link to={'/majalah'}>
                            <Button style={{ width: '30%', backgroundColor: 'white', fontSize: '20px', color: '#143A52' }} type="button" variant="primary" className="mx-auto border-0">
                                TAMPILKAN LEBIH BANYAK
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
</div>

            <Container fluid style={{ paddingLeft: '100px', paddingRight: '100px' }}>
                <div className="py-5" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                    <div className="text-center mb-3">
                        <h3 style={{ fontSize: '50px', marginTop: '2%', color: '#143A52' }}><strong>FAKTA UNIK</strong></h3>
                        <p style={{ fontSize: '30px', color: '#143A52' }}>Flip kartu dibawah untuk mengetahui fakta yang sebenarnya!</p>
                    </div>
                    <div>
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
                            <Col className="text-center">
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
                            <Col className="text-center">
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
                                <Link to={'/biotalaut'}>
                                    <Image className="final" src={require('../assets/image/final flip.png')} alt="Image 5 " />
                                </Link>
                            </div>
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Edukasi;