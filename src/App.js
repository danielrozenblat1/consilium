import logo from './logo.svg';
import './App.css';

import ArchitecturePortfolio from './screens/SecondScreen';
import ArchitectHeroCarousel from './screens/FirstScreen';

import RoeiProfile from './components/me/Me';
import ForthScreen from './screens/ForthScreen';
import Timeline from './components/steps/Steps';
import SixthScreen from './screens/SixthScreen';
import SeventhScreen from './screens/SeventhScreen';
import ByMe from './components/ByMe/ByMe';

function App() {
  return <>
  <ArchitectHeroCarousel/>
  <ForthScreen/>
<RoeiProfile/>
 <ArchitecturePortfolio/>
<SixthScreen/>
<SeventhScreen/>
<ByMe/>
  </>
}

export default App;
