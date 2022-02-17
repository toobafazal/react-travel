import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Aboutimg from '../images/Thousand-03.svg';
import Button from 'react-bootstrap/Button';

const Guide = () => {
  return (
    <div>
      <Container className="mt-5">
        <Row>

          <Col xs={6} md={6} id="guide" >
            <div className="mx-5 my-5 ">
              <h1 className="mx-3 my-3" >Guides by Thousand  <br /> Sunny </h1>
              <p className=" text-justify mx-3 my-3" style={{ fontSize: 13, color: '#848484' }}>Packed with tips and advice from our on-the-ground experts,
                our city guides app (iOS and Android) is the ultimate resource before and during a trip.</p>
              <Button variant="warning" className=" explorebtn mx-3 my-3">Download</Button>{' '}
            </div>
          </Col>
          <Col xs={6} md={6}>
            <div>
              <Image src={Aboutimg} className="aboutimg" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Guide