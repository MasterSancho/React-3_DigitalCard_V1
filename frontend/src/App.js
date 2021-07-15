import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import PopopScreen from './screens/PopopScreen';

const App = () => {
 return (
  <Router>
   {/* <Header /> */}
   <main>
    <Route path='/' component={HomeScreen} exact />
    <Route path='/iframe' component={PopopScreen} />
   </main>
   <Footer />
  </Router>
 );
};

export default App;
