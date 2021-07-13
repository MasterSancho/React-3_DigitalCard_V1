import React from 'react';
import { Container, Carousel, Image } from 'react-bootstrap';
import recommends from '../recommends';

const RecommendsCarousel = () => {
 return (
  <Container className='py-5'>
   <h2 className='text-center'>לקוחות ממליצים</h2>

   <Carousel pause='hover' className='bg-dark'>
    {recommends.map((recommend) => (
     <Carousel.Item key={recommend._id}>
      <Image src={recommend.image} alt={recommend.name} fluid />
     </Carousel.Item>
    ))}
   </Carousel>
  </Container>
 );
};
export default RecommendsCarousel;
