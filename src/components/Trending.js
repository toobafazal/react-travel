import React from 'react'
import { Card, Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { ArrowRight } from 'react-bootstrap-icons';
import bigCardImg1 from '../images/image12.svg';
import bigCardImg2 from '../images/image13.svg';
import bigCardImg3 from '../images/image14.svg';
import bigCardImg4 from '../images/image15.svg';
const Trending = () => {
    return (
        <div>
            <Container className="mt-4 mb-5">
                <Row>
                    <Col xs={8} md={8} className="mx-5">
                        <h1 style={{ textAlign: "left" }} className="my-5">Trending Stories</h1>
                    </Col>
                    <Col xs={2} md={2} className="my-5">
                        <h6 style={{ color: "#FB8F1D" }} className="m-4">View All
                            {<ArrowRight size={20} />}

                        </h6>
                    </Col>
                    <div>
                        <Row>
                            <Col md={3} xs={6}>
                                <Card className="Card">
                                    <Card.Img variant="top" src={bigCardImg1} height={250} width={200} />
                                    <h4 className='mx-1 my-3'>The many benefits of
                                        taking a healing holiday</h4>
                                    <p style={{ fontSize: 13, color: '#848484' }}  className='mx-1 my-3'>‘Helaing holidays’ are on the rise
                                        tohelp maximise your health and happines...</p>
                                    <h6 style={{ color: "#FB8F1D" }}  className='mx-1 my-3'>Read more</h6>
                                </Card>
                            </Col>
                            <Col md={3} xs={6}>
                                <Card className="Card">
                                    <Card.Img variant="top" src={bigCardImg2} height={250} width={250} />
                                    <h4 className='mx-1 my-3'>The many benefits of
                                        taking a healing holiday</h4>
                                    <p style={{ fontSize: 13, color: '#848484' }} className='mx-1 my-3'>‘Helaing holidays’ are on the rise
                                        tohelp maximise your health and happines...</p>
                                    <h6 style={{ color: "#FB8F1D" }} className='mx-1 my-3'>Read more</h6>
                                </Card>
                            </Col>
                            <Col md={3} xs={6}>
                                <Card className="Card">
                                    <Card.Img variant="top" src={bigCardImg3} height={250} width={200} />
                                    <h4 className='mx-1 my-3'>The many benefits of
                                        taking a healing holiday</h4>
                                    <p style={{ fontSize: 13, color: '#848484' }} className='mx-1 my-3'>‘Helaing holidays’ are on the rise
                                        tohelp maximise your health and happines...</p>
                                    <h6 style={{ color: "#FB8F1D" }} className='mx-1 my-3'>Read more</h6>
                                </Card>
                            </Col>
                            <Col md={3} xs={6}>
                                <Card className="Card">
                                    <Card.Img variant="top" src={bigCardImg4} height={250} width={200} />
                                    <h4 className='mx-1 my-3'>The many benefits of
                                        taking a healing holiday</h4>
                                    <p style={{ fontSize: 13, color: '#848484' }} className='mx-1 my-3'>‘Helaing holidays’ are on the rise
                                        tohelp maximise your health and happines...</p>
                                    <h6 style={{ color: "#FB8F1D" }} className='mx-1 my-3'>Read more</h6>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </Container>

        </div>
    )
}

export default Trending