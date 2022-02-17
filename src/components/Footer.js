import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import logo from '../images/Ellipse 7.svg';
import logo1 from '../images/Ellipse 11.svg';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'react-bootstrap-icons';


const Footer = () => {
    return (
        <div>


            <Container fluid className="mt-5 bg-light">
                <Row className='pt-5 pb-3 mx-5'>
                    <Col>
                        <Image src={logo} alt="logo" className='mb-3' />
                        <Image src={logo1} alt="logo" className='mb-3 logo' />

                        <p style={{ fontSize: 13, color: '#848484' }}>
                            Plan and book your perfect trip with
                            expert advice, travel tips destination
                            information from us
                        </p>
                        <br />
                        <p style={{ fontSize: 13, color: '#848484' }}>©2020 Thousand Sunny. All rights reserved</p>
                    </Col>
                    <Col>
                        <h6>  Destinations </h6>
                        <p style={{ fontSize: 13, color: '#848484' }}>

                            America  <br />
                            Europe  <br />
                            Africa  <br />
                            Antarctica <br />
                            Asia <br />
                        </p>
                    </Col>
                    <Col>
                        <h6>   SHOP </h6>
                        <p style={{ fontSize: 13, color: '#848484' }}>
                            Destination Guides <br />
                            Pictorial & Gifts <br />
                            Special Offers <br />
                            Delivery Times <br />
                            FAQS
                        </p>
                    </Col>
                    <Col>
                        <h6>  INTRESTS </h6>
                        <p style={{ fontSize: 13, color: '#848484' }}>


                            Adventrure Travel <br />
                            Art &  culture  <br />
                            Wildlife and Native <br />
                            Family holiday <br />
                            Food and Drinks <br />
                        </p>
                    </Col>

                </Row>
                <Row>
                    <Col md={12} className='text-center'>
                        <hr />
                        {/* <ArrowRight  size={50}/> */}
                        <div className='text-center'>
                            <Facebook color="black" size={20} className="m-3" />
                            <Instagram color="black" size={20} className="m-3" />
                            <Twitter color="black" size={20} className="m-3" />
                            <Linkedin color="black" size={20} className="m-3" />
                            <Youtube color="black" size={20} className="m-3" />

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer