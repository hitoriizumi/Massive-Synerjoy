import React, { useState, useEffect } from "react";
import "../style/Crud.css";
import { Form, Button, InputGroup, FormControl, Container, Row, Col, Alert } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CrudBiotalaut() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [image, setImage] = useState(null);
    const [weight, setWeight] = useState("");
    const [food, setFood] = useState("");
    const [size, setSize] = useState("");
    const [depth, setDepth] = useState("");
    const [description, setDescription] = useState("");
    const [funFact, setFunFact] = useState("");
    const [userName, setUserName] = useState("");

    const [alertMessage, setAlertMessage] = useState("");
    const [alertVariant, setAlertVariant] = useState("");

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

        fetchProfile();
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('image', image);
        formData.append('weight', weight);
        formData.append('food', food);
        formData.append('size', size);
        formData.append('depth', depth);
        formData.append('description', description);
        formData.append('fun_fact', funFact);

        try {
            const response = await axios.post('http://localhost:5000/api/biota-lauts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.status === 201) {
                setAlertMessage("Biota Laut created successfully!");
                setAlertVariant("success");
                setTimeout(() => {
                    navigate('/listbiotalaut');
                }, 2000); // Tunggu 2 detik sebelum mengarahkan
            }
        } catch (error) {
            setAlertMessage("There was an error creating the Biota Laut!");
            setAlertVariant("danger");
        }
    };

    return (
        <div className="body">
            <div className="mt-5">
                <Container fluid style={{ paddingLeft: '120px' }}>
                    <Button className='border-0' style={{ color: 'white', fontSize: '25px' }} onClick={() => navigate(-1)}>
                        KEMBALI
                    </Button>
                </Container>
            </div>

            <Container className="my-5">
                <Row className="justify-content-center">
                    <Col md={8} lg={6} xl={5}>
                        <h1 style={{ fontSize: '40px' }} className="text-center mb-5">Selamat Datang {userName} Admin Wave Wonderland</h1>
                        <h1 style={{ fontSize: '40px' }} className="text-center mb-5">Create Biotalaut</h1>

                        {alertMessage && (
                            <Alert variant={alertVariant} onClose={() => setAlertMessage("")} dismissible>
                                {alertMessage}
                            </Alert>
                        )}

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Image</Form.Label>
                                <Form.Control
                                    type="file"
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Weight</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter weight"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Food</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter food"
                                    value={food}
                                    onChange={(e) => setFood(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Size</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text>px</InputGroup.Text>
                                    <FormControl
                                        type="number"
                                        placeholder="Enter size"
                                        value={size}
                                        onChange={(e) => setSize(e.target.value)}
                                    />
                                </InputGroup>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Depth</Form.Label>
                                <FormControl
                                    type="text"
                                    placeholder="Enter depth"
                                    value={depth}
                                    onChange={(e) => setDepth(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Enter description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Fun Fact</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Enter fun fact"
                                    value={funFact}
                                    onChange={(e) => setFunFact(e.target.value)}
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" block>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CrudBiotalaut;