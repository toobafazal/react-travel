import React from 'react'
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import vector from '../images/Vector.svg';
import Image from 'react-bootstrap/Image';
import test from '../images/image6.svg';


const Testimonial = () => {
  return (
    <div>
      <Container className="mt-4 mb-5">
        <Row>
          <Col xs={12} md={12} className="mx-5">
            <h1 style={{ textAlign: "left" }} className="my-5">Testimonial</h1>
          </Col>
          <Col xs={12} md={6} className="p-5">
            <Image src={vector} fluid rounded />
            <Image src={vector} fluid rounded className="mx-2" />
            <Image src={vector} fluid rounded className="mx-2" />
            <Image src={vector} fluid rounded className="mx-2" />
            <Image src={vector} fluid rounded className="mx-2" />
            <h5 className="my-5 text-justify font-weight-bold">“Quisque in lacus a urna fermentum euismod.<br />
              Integer mi nibh, dapibus ac scelerisque eu, facilisis<br /> quis purus. Morbi blandit sit amet turpis nec”</h5>
            <h5>Edward Newgate</h5>
            <p>Founder Circle</p>
          </Col>
          <Col xs={12} md={6} className="">
            <Image src={test} fluid rounded className="" />
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Testimonial