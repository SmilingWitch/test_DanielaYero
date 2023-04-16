import './App.css';
import Launch from './pages/launch/Launch';
import LaunchDetails from './pages/launchDetails/LaunchDetails';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (    
    <Routes>
      <Route path = "/" element = {<Launch/>}/>
      <Route path = "/launchDetails/*" element = {<LaunchDetails/>}/>
    </Routes>    
  );
}

export default App;
