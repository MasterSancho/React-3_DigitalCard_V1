import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';

const AtarMektsuimScreen = () => {
 return (
  <>
   <Container>
    <Link className='btn btn-dark my-3' to='/'>
     Go Back
    </Link>
    <Row>
     <Iframe
      url='https://www.tivuch1.co.il/%D7%A1%D7%95%D7%9B%D7%9F/%D7%A9%D7%99-%D7%90%D7%A8%D7%99%D7%90%D7%9C%D7%99/'
      width='80%'
      height='1000px'
      display='initial'
      position='relative'
     />
    </Row>
   </Container>
  </>
 );
};

export default AtarMektsuimScreen;
