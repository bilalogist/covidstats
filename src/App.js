import Helpline from './components/helpline'
import {
  Grid, Container
} from '@material-ui/core'
import Introduction from './components/introduction'
import VaccineStats from './components/vaccinestats'
import PakStats from './components/pakStats'
import ProvinceStats from './components/provinceStat'
import { useEffect } from 'react'
function App() {



  return (
    <div className="App">
      <Helpline />
      <Container>
        <Introduction />
        <VaccineStats />
        <PakStats />
        <ProvinceStats />
      </Container>

    </div>
  );
}

export default App;
