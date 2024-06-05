import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import "../style/Crud.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CrudMajalah() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null); // Menggunakan null untuk menyimpan file gambar
  const [textDetail, setTextDetail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [name, setName] = useState("");

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
        setName(response.data.name);
      } catch (error) {
        console.error(error);
        navigate("/loginadmin");
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('image', image);
      formData.append('description', textDetail);

      // Kirim data ke backend menggunakan FormData untuk mengirim file
      await axios.post('http://localhost:5000/api/majalahs', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      // Tampilkan alert
      setShowAlert(true);
      // Reset form
      setTitle("");
      setImage(null);
      setTextDetail("");
      // Navigasi ke halaman listmajalah setelah berhasil membuat majalah
      setTimeout(() => {
        navigate("/listmajalah");
      }, 2000); // Berikan sedikit jeda waktu untuk menampilkan alert
    } catch (error) {
      console.error('Error creating majalah:', error);
      // Tambahkan penanganan kesalahan sesuai kebutuhan
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
            <h1 style={{ fontSize: '50px' }} className="text-center mb-5">Selamat Datang {name} Admin Wave Wonderland</h1>
            <h1 style={{ fontSize: '50px' }} className="text-center mb-5">Create Majalah</h1>
            {showAlert && (
              <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                Majalah berhasil dibuat! Anda akan diarahkan ke halaman daftar majalah.
              </Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="file" // Menggunakan tipe file untuk memilih gambar
                  onChange={(e) => setImage(e.target.files[0])} // Menggunakan target.files[0] untuk mengambil file yang dipilih
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Text Detail</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Enter text detail"
                  value={textDetail}
                  onChange={(e) => setTextDetail(e.target.value)}
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

export default CrudMajalah;