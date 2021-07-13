import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Twitter, Facebook, Linkedin, Instagram } from 'react-bootstrap-icons';

const IconsLinks = () => {
 return (
  <div>
   <Container className='py-5'>
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

    <Row className='g-4 py-4'>
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

export default IconsLinks;
