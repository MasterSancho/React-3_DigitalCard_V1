import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Showcase from './components/Showcase';
import ProfileCard from './components/ProfileCard';
import IconsLinks from './components/IconsLinks';
import IconsShare from './components/IconsShare';
import PicturesCarousel from './components/PicturesCarousel';
import About from './components/About';
import RecommendsCarousel from './components/RecommendsCarousel';
import Footer from './components/Footer';
import Divider from './components/Divider';

const App = () => {
 return (
  <Router>
   {/* <Header /> */}
   <main>
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
   </main>
   <Footer />
  </Router>
 );
};

export default App;
