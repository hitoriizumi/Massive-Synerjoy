import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/londrina-solid';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditMajalah = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [majalah, setMajalah] = useState({
        title: '',
        description: '',
        image: ''
    });
    const [selectedImage, setSelectedImage] = useState(null);
    const [userName, setUserName] = useState("");

    useEffect(() => {
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

        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/majalahs/${id}`);
                setMajalah(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchProfile();
        fetchData();
    }, [id, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMajalah({ ...majalah, [name]: value });
    };

    const handleFileChange = (e) => {
        setSelectedImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', majalah.title);
        formData.append('description', majalah.description);
        if (selectedImage) {
            formData.append('image', selectedImage);
        }

        try {
            await axios.put(`http://localhost:5000/api/majalahs/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            navigate('/listmajalah');
        } catch (error) {
            console.error('Error updating majalah:', error);
        }
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

            <div>
                <Container fluid style={{ paddingLeft: '100px', paddingRight: '100px' }}>
                    <div className="py-5">
                        <div className="text-center mb-3">
                            <h1 style={{ fontSize: '40px' }} className="text-center mb-5">Halo {userName} Admin Wave Wonderland</h1>
                            <h3 style={{ fontSize: '50px', marginBottom: '4%', marginTop: '2%' }}><strong>Edit Majalah</strong></h3>
                        </div>
                        <div className='pb-5' style={{ fontSize: '30px' }}>
                            <Container fluid>
                                <Row className='justify-content-center'>
                                    <Col md={6} lg={4} className='text-left'>
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group>
                                                <Form.Label>Judul</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="title"
                                                    value={majalah.title}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>

                                            <Form.Group>
                                                <Form.Label>Deskripsi</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={5}
                                                    name="description"
                                                    value={majalah.description}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>

                                            <Form.Group className='mb-3'>
                                                <Form.Label>Gambar</Form.Label>
                                                {majalah.image && (
                                                    <Image
                                                        src={`http://localhost:5000/uploads/${majalah.image}`}
                                                        alt={majalah.title}
                                                        className='center-content img-fluid mb-3'
                                                        style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px' }}
                                                    />
                                                )}
                                                <Form.Control type="file" onChange={handleFileChange} />
                                            </Form.Group>

                                            <Button variant="primary" type="submit">
                                                Simpan
                                            </Button>
                                        </Form>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default EditMajalah;