import React from 'react'
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from "react-elastic-carousel";
import Image from 'react-bootstrap/Image';
import img1 from '../images/screenshot3.svg';
import img2 from '../images/image 4.svg';
import img3 from '../images/screenshot5.svg';
import img4 from '../images/screenshot4.svg';
import {  ArrowRight } from 'react-bootstrap-icons';

const Feature = () => {
    // const breakPoints = [
    //     { width: 1, itemsToShow: 1 },
    //     { width: 550, itemsToShow: 2 },
    //     { width: 768, itemsToShow: 4 },
    //     { width: 1200, itemsToShow: 5 },
    //   ];


    return (
        <div>
            <Container className="mt-4 mb-5" id="feature">
                <Row>
                    <Col xs={8} md={8} className="mx-5">
                        <h1 style={{ textAlign: "left" }} className="m-5">Featured destinations</h1>
                    </Col>
                    <Col xs={2} md={2} className="my-5">
                        <h6 style={{ color: "#FB8F1D" }} className="m-4">View All
                           { <ArrowRight  size={20}/> }

                        </h6>
                    </Col>
                </Row>
                <Row>
                    <Col xs={3} md={3}>
                        <div className="mx-2">
                            <Image src={img1} className="cardimg" />
                            <div className='imgtext p-1'>
                                <h6 className="mx-2">Raja Ampat</h6>
                                <p className="mx-2">Indonesia</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={3} md={3}>
                        <div className="mx-2">
                            <Image src={img2} className="cardimg" />
                            <div className='imgtext p-1'>
                                <h6 className="mx-2">Fanjingshan</h6>
                                <p className="mx-2">China</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={3} md={3}>
                        <div className="mx-2">
                            <Image src={img3} className="cardimg" />
                            <div className='imgtext p-1'>
                                <h6 className="mx-2">Vevey</h6>
                                <p className="mx-2">Switzerland</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={3} md={3}>
                        <div className="mx-2">
                            <Image src={img4} className="cardimg" />
                            <div className='imgtext p-1'>
                                <h6 className="mx-2">Skadar</h6>
                                <p className="mx-2">Montenegro</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Feature