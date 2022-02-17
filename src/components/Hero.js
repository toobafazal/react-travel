import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import bigImg from '../images/thousand-01 1.svg';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Hero = () => {
  return (
    <div>
    
    <Container className="mt-4">
    <Row>
        <Col xs={6} md={6}>
            <h1 className='explore mx-5'>Explore and <br />Travel</h1>
            <h6 className=' mx-5 my-3'>Holiday finder</h6>
            <div className='hr mx-5 '></div>
            <div  className="d-flex justify-content-around my-3 mx-5">
            <Form className="d-flex" style={{ width: '45%' }}>
              <FormControl
                type="search"
                placeholder="Location"
                aria-label="Search"
              />
              </Form>
              <Form className="d-flex" style={{ width: "45% "}}>
              <FormControl
                type="search"
                placeholder="Activity"
                aria-label="Search"
              />
              </Form>
         </div>
         <div  className="d-flex justify-content-around  my-3 mx-5">
         <Form className="d-flex" style={{ width: '45%' }}>
              <FormControl
                type="search"
                placeholder="Grade"
                aria-label="Search"
              />
              </Form>
           <Form className="d-flex" style={{ width: '45%' }}>
           <FormControl
           type="search"
           placeholder="Date"
           aria-label="Search"
         />
         </Form>
      </div>
      <Button variant="warning" className="mt-3 mx-5 explorebtn">Explore</Button>{' '}

        </Col>
        <Col xs={6} md={6}>
        <Image src={bigImg} className="bigimg" fluid rounded />

        </Col>
    </Row>
</Container>
    </div>
  )
}

export default Hero