import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';
import LandingPage from './Pages/LandingPage';
import Homepage from './Components/HomePage/Homepage';
import Supplier from './Components/NavComponents/Supplier';
import RFx from './Components/NavComponents/RFx/RFx';
import RFxManagement from './Components/NavComponents/RFxManagement/RFxManagement';
import Response from './Components/NavComponents/Responses/Response';
import Overview from './Components/OverviewPage/Overview';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <NavBar/>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path='/home' element={<Homepage />} />
            <Route path='/Suppliers' element={<Supplier />} />
            <Route path='/RFx' element={<RFx/>}/>
            <Route path='/RFxManagement' element={<RFxManagement/>}/>
            <Route path='/Response' element={<Response/>}/>
            <Route path="/Overview" element={<Overview/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
