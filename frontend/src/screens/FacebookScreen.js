import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';

const FacebookScreen = () => {
 return (
  <>
   <Container>
    <Link className='btn btn-dark my-3' to='/'>
     Go Back
    </Link>
    <Row>
     <Iframe
      name='f3c4a50c881cc24'
      width='500px'
      height='650px'
      data-testid='fb:page Facebook Social Plugin'
      title='fb:page Facebook Social Plugin'
      frameborder='0'
      allowtransparency='true'
      allowfullscreen='true'
      scrolling='no'
      allow='encrypted-media'
      src='https://www.facebook.com/v2.10/plugins/page.php?app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df36c00c2714727c%26domain%3Dremax.your-app.website%26origin%3Dhttps%253A%252F%252Fremax.your-app.website%252Ff2ecab6f54b5008%26relation%3Dparent.parent&amp;container_width=500&amp;height=650&amp;hide_cover=false&amp;hide_cta=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fshaiarieliremax&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=true&amp;small_header=true&amp;tabs=timeline&amp;width=500px'
     />
    </Row>
   </Container>
  </>
 );
};

export default FacebookScreen;
