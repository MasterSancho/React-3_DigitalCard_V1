import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import MaagarNehasimScreen from './screens/MaagarNehasimScreen';
import AtarAmadrihLeMehiraScreen from './screens/AtarAmadrihLeMehiraScreen';
import AtarDaNnehitaScreen from './screens/AtarDaNnehitaScreen';
import FacebookScreen from './screens/FacebookScreen';
import MadlanScreen from './screens/MadlanScreen';
import AtarEzerGovmapScreen from './screens/AtarEzerGovmapScreen';
import AtarMektsuimScreen from './screens/AtarMektsuimScreen';
import AtarMinAtonimScreen from './screens/AtarMinAtonimScreen';

const App = () => {
 return (
  <Router>
   {/* <Header /> */}
   <main>
    <Route path='/' component={HomeScreen} exact />
    <Route path='/maagar_nehasim' component={MaagarNehasimScreen} />
    <Route path='/atar_amadrihLeMehira' component={AtarAmadrihLeMehiraScreen} />
    <Route path='/atar_daNnehita' component={AtarDaNnehitaScreen} />
    <Route path='/facebook' component={FacebookScreen} />
    <Route path='/madlan' component={MadlanScreen} />
    <Route path='/atar_ezerGovmap' component={AtarEzerGovmapScreen} />
    <Route path='/atar_mektsuim' component={AtarMektsuimScreen} />
    <Route path='/atar_minAtonim' component={AtarMinAtonimScreen} />
   </main>
   <Footer />
  </Router>
 );
};

export default App;
