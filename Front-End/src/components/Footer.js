import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/londrina-solid';
import "../style/Footer.css"
import { Container, Row, Col, Image } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs={4} md={2} className="logo-col">
            <Image src={require('../assets/image/Logo.png')} alt="Logo Left" style={{ width: '150px', height: '150px' }} />
          </Col>
          <Col xs={4} md={8} className="hr-col">
            <hr style={{ color: 'white', marginTop: '50px' }} />
            <p style={{ color: 'white' }}>© Copyright Synerjoy 2024. All rights reserved.</p>
          </Col>
          <Col xs={4} md={2} className="text-col">
            <p>Tumbuhlah seperti ombak yang besar, mencintai laut kita dan melindungi habitatnya. Hanya dengan itu, kita akan meraih kekayaan yang sesungguhnya</p>
            <div className="logo-row">
              <Image src={require('../assets/image/email-icon.png')} alt="Logo 1" style={{ width: '20px', height: '20px' }} />
              <Image src={require('../assets/image/twitter-icon.png')} alt="Logo 2" style={{ width: '20px', height: '20px' }} />
              <Image src={require('../assets/image/instagram-icon.png')} alt="Logo 3" style={{ width: '20px', height: '20px' }} />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;