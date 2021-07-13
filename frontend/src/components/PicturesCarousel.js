import React from 'react';
import { Container, Carousel, Image } from 'react-bootstrap';
import pictures from '../pictures';

const PicturesCarousel = () => {
 return (
  <Container className='py-5'>
   <Carousel pause='hover' className='bg-dark'>
    {pictures.map((picture) => (
     <Carousel.Item key={picture._id}>
      <Image src={picture.image} alt={picture.name} fluid />
     </Carousel.Item>
    ))}
   </Carousel>
  </Container>
 );
};
export default PicturesCarousel;
