import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';

const AtarEzerGovmapScreen = () => {
 return (
  <>
   <Container>
    <Link className='btn btn-dark my-3' to='/'>
     Go Back
    </Link>
    <Row>
     <Iframe
      url='https://www.govmap.gov.il/'
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

export default AtarEzerGovmapScreen;
