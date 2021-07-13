import React from 'react';
import { Container, Row, Card } from 'react-bootstrap';

const ProfileCard = () => {
 return (
  <div>
   <Container>
    <Row>
     <Card>
      <Card.Body className='text-center'>
       <Card.Img
        src='images/08.09.20_Arieli_Shay_029.jpg'
        className='rounded-circle mb-3 w-50'
        alt=''
        fluid
       />

       <Card.Title className='text-dark mb-3'>שי אריאלי</Card.Title>

       <Card.Text className='text-dark'>יועץ נדלן שלך</Card.Text>
      </Card.Body>
     </Card>
    </Row>
   </Container>
  </div>
 );
};

export default ProfileCard;
