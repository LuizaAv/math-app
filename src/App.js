import './App.css';
import Navbar from './components/navbar/navbar';
import Maincontent from './components/maincontent/maincontent';

import LoginPage from "./components/navbar/loginPage";
import {
    Routes,
    Route
} from "react-router-dom";
import Practicepage from './components/maincontent/practicepage';
import MainpageButton from './components/maincontent/mainpagebuttons';
import Mentalmathpractice from './components/theorysections/mentalmathpractice';
import Register from './components/navbar/register';
import Algebra from './components/maincontent/maincontentlinks/algebra';
import Arithmetic from './components/maincontent/maincontentlinks/arithmetic';
import Prealgebra from './components/maincontent/maincontentlinks/prealgebra';
import Geometrybasics from './components/maincontent/maincontentlinks/geometrybasics';
import Geometry from './components/maincontent/maincontentlinks/geometry';
import Aboutus from './components/navbar/burgermenuparts/aboutus';
import Aboutapp from './components/navbar/burgermenuparts/aboutapp';
import History from './components/navbar/burgermenuparts/history';
import Contactus from './components/navbar/burgermenuparts/contactus';


function App() {
  return (
    <div className="App">
      <Navbar />
      <MainpageButton />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Maincontent />}/>
        <Route path="/practicePage" element={<Practicepage />} />
        <Route path="/mentalmathpractice" element={<Mentalmathpractice />} />
        <Route path="/registerpage" element={<Register />} />
        <Route path="/algebra" element={<Algebra />} />
        <Route path="/arithmetic" element={<Arithmetic />} />
        <Route path="/prealgebra" element={<Prealgebra />} />
        <Route path="/geometrybasics" element={<Geometrybasics />} />
        <Route path="/geometry" element={<Geometry />} />
        <Route path="/aboutus" element={<Aboutus /> } />
        <Route path="/aboutapp" element={<Aboutus /> } />
        <Route path="/history" element={<History /> } />
        <Route path="/contactus" element={<Contactus/>} />
      </Routes>
    </div>
  );
}

export default App;
