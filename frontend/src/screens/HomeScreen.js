import React from 'react';
import Showcase from '../components/Showcase';
import ProfileCard from '../components/ProfileCard';
import IconsLinks from '../components/IconsLinks';
import IconsShare from '../components/IconsShare';
import PicturesCarousel from '../components/PicturesCarousel';
import About from '../components/About';
import RecommendsCarousel from '../components/RecommendsCarousel';
import Divider from '../components/Divider';

const HomeScreen = () => {
 return (
  <>
   <Showcase />
   <ProfileCard />
   <IconsLinks />
   <IconsShare />
   <Divider />
   <PicturesCarousel />
   <Divider />
   <About />
   <Divider />
   <RecommendsCarousel />
   <Divider />
  </>
 );
};

export default HomeScreen;
