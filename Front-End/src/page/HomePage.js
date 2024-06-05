import React from 'react';
import "../style/Home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/londrina-solid';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const faqData = [
  {
    question: 'Why is ocean conservation important?',
    answer:
      'Ocean conservation is crucial for maintaining biodiversity, ensuring sustainable fishery practices, and preserving the health of the planet\'s largest ecosystem which impacts global climate and oxygen production.',
  },
  {
    question: 'How does plastic affect marine life?',
    answer:
      'Plastic can be ingested by marine animals, leading to physical harm, starvation, and even death. It also breaks down into microplastics, affecting even the smallest organisms in the food chain.',
  },
  {
    question: 'What can I do to help protect the ocean?',
    answer:
      'Reduce plastic use, support sustainable seafood choices, decrease your carbon footprint, participate in beach cleanups, and advocate for marine conservation policies.',
  },
  {
    question: 'How do marine animals contribute to the ecosystem?',
    answer:
      'Marine animals play various roles, such as maintaining the health of coral reefs, cycling nutrients, and providing food for other marine and terrestrial life.',
  },
  {
    question: 'What can we do to help marine animals thrive?',
    answer:
      'Support conservation efforts, reduce water pollution, practice sustainable fishing, and minimize your carbon footprint to help protect marine habitats.',
  },
];


const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className='body'>
      <div>
      <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block"
                    src={require('../assets/image/nemo.jpg')}
                    alt="First slide"
                    style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                    <h3>Ikan Badut atau Nemo!</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block"
                    src={require('../assets/image/turtle.jpg')}
                    alt="Second slide"
                    style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> 
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block"
                    src={require('../assets/image/pari.jpg')}
                    alt="Third slide"
                    style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
      </div>

      <Container className="mt-5 mb-5">
        <Row className="text-center">
            <Col>
                <h1 style={{ color: '#143A52' }}><strong>Selamat datang sesama pecinta laut di Indonesia</strong></h1>
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

      <div className="container-fluid banner2 d-flex align-items-center justify-content-center">
        <div className="container-sm px-5 ">
            <div className="py-5">
              <div className="row mx-auto align-items-center">
                <div className="col-md-6 px-4 d-flex flex-column justify-content-center">
                  <div className="p-3">
                    <h3 style={{ fontSize: '30px', color: 'white' }}><strong>Tentang Kami<hr style={{ width: '50%' }} /></strong></h3>
                    <p style={{ color: 'white' }} align="justify">Wave Wonderland is a vibrant marine haven dedicated to the mysterious and enchanting world beneath the
                      waves. With a focus on educating the young and curious, our platform unveils the wonderous lives of sea creatures, highlighting the importance of marine conservation.
                      Through immersive stories and compelling facts, we aim to foster a deep appreciation for our ocean's biodiversity. Join us as we embark on educational voyages, explore
                      the vital role of marine habitats, and inspire action to protect our planet's blue heart</p>
                  </div>
                </div>
                <div className="col-md-6 px-4 d-flex flex-column justify-content-center">
                  <div className="p-3">
                    <p align="justify" style={{ color: 'white' }}>Wave Wonderland is a vibrant marine haven dedicated to the mysterious and enchanting world beneath the
                      waves. With a focus on educating the young and curious, our platform unveils the wonderous lives of sea creatures, highlighting the importance of marine conservation.
                      Through immersive stories and compelling facts, we aim to foster a deep appreciation for our ocean's biodiversity. Join us as we embark on educational voyages, explore
                      the vital role of marine habitats, and inspire action to protect our planet's blue heart</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div className="container mt-5 font-faq">
      <div className="row text-center">
        <div className="col">
          <h2 style={{ fontSize: '30px' }}>
            <strong>Frequently Asked Questions (FAQs)</strong>
          </h2>
          <p align="justify" className="text-md-justify px-lg-5 text-center">
            Sebelum SeaLand mengajukan pertanyaan, silahkan periksa
            FAQs di bawah sebelum mengajukan pertanyaan.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="container-sm px-5">
          <div className="container-sm py-5">
            <div className="py-5">
              <div className="row mx-auto align-items-center">
                <div className="col-md-6 px-4 d-flex flex-column justify-content-center">
                  <div className="row justify-content-center">
                    <div className="accordion faq-accordian" id="faqAccordion">
                      {faqData.map((item, index) => (
                        <div
                          className={`card border-0 wow fadeInUp ${
                            index === activeIndex ? 'show' : ''
                          }`}
                          key={index}
                          data-wow-delay="0.2s"
                          style={{
                            visibility: 'visible',
                            animationDelay: '0.2s',
                            animationName: 'fadeInUp',
                            marginBottom: '10px',
                          }}
                        >
                          <div
                            className={`card-header`}
                            id={`heading${index + 1}`}
                            style={{ backgroundColor: '#143A52', color: 'white' }}
                          >
                            <h4
                              className={`mb-0 collapsed p-2 ${
                                index === activeIndex ? 'collapsed' : ''
                              }`}
                              role="button" // Add the button role
                              data-bs-toggle="collapse"
                              data-bs-target={`#collapse${index + 1}`}
                              aria-expanded="true"
                              aria-controls={`collapse${index + 1}`}
                              onClick={() => toggleAccordion(index)}
                            >
                              {item.question}
                              <span className="lni-chevron-up"></span>
                            </h4>
                          </div>
                          <div
                            id={`collapse${index + 1}`}
                            className={`collapse ${
                              index === activeIndex ? 'show' : ''
                            }`}
                            aria-labelledby={`heading${index + 1}`}
                            data-parent="#faqAccordion"
                          >
                            <div className="card-body" style={{ borderStyle: 'solid' }}>
                              {item.answer}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-none d-md-block">
                  <img src={require('../assets/image/faq.png')} alt="Profile" className="px-4 w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default HomePage;