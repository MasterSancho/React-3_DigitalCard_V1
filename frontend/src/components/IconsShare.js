import React from 'react';
import { Container, Row, Button, Col, Card } from 'react-bootstrap';
import { Twitter, Facebook, Linkedin, Instagram } from 'react-bootstrap-icons';

const IconsShare = () => {
 return (
  <div>
   <Container>
    <Row>
     <Button type='button' className='m-auto w-50 mb-4'>
      Add to contacts
     </Button>
    </Row>

    <Card.Title className='text-center mb-3'>Share Links</Card.Title>

    <Row className='g-4'>
     <Col className='text-center'>
      <Card.Link href='#'>
       <Twitter size={50} />
      </Card.Link>
      <Card.Text>Call</Card.Text>
     </Col>

     <Col className='text-center'>
      <Card.Link href='#'>
       <Facebook size={50} />
      </Card.Link>
      <Card.Text>Facebook</Card.Text>
     </Col>

     <Col className='text-center'>
      <Card.Link href='#'>
       <Linkedin size={50} />
      </Card.Link>
      <Card.Text>Linkedin</Card.Text>
     </Col>

     <Col className='text-center'>
      <Card.Link href='#'>
       <Instagram size={50} />
      </Card.Link>
      <Card.Text>Instagram</Card.Text>
     </Col>
    </Row>
   </Container>
  </div>
 );
};

export default IconsShare;
