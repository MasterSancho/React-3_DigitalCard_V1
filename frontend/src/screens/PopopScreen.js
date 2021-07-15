import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';

const PopopScreen = () => {
 return (
  <>
   <Container>
    <Link className='btn btn-dark my-3' to='/'>
     Go Back
    </Link>
    <Row>
     <Iframe
      url='https://www.remax-israel.com/arielis'
      width='80%'
      height='1000px'
      id='myId'
      className=''
      display='initial'
      position='relative'
     />
    </Row>
   </Container>
  </>
 );
};

export default PopopScreen;
