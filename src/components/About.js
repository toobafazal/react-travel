import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Aboutimg from '../images/Thousand-02 1.svg';
import Button from 'react-bootstrap/Button';

const About = () => {
  return (
    <div>
    <Container fluid className="mt-4" id="about">
    <Row>
        <Col xs={6} md={6}>
        <div>
        <Image src={Aboutimg} className="aboutimg mx-5"  />
        </div>
        </Col>
        <Col xs={6} md={6} >
        <div className="mx-5 my-5 ">
            <h1 className="mx-3 my-3" >A new way to explore the <br /> world </h1>
            <p className=" text-justify mx-3 my-3" style={{ fontSize: 13, color: '#848484' }}>For decades travellers have reached for Lonely Planet books when
             looking to plan and execute their perfect 
            trip, but now, they can also let Lonely Planet Experiences lead the way</p>
         <Button variant="warning" className=" explorebtn mx-3 my-3">Explore</Button>{' '}
    </div>
        </Col>
    </Row>
</Container>
    
    </div>
  )
}

export default About