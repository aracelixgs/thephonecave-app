
import { Routes, Route } from 'react-router-dom';

import PhoneList from './pages/PhoneList';
import PhoneDetails from './pages/PhoneDetails'

import './App.css';

function App() {
  return (
    <div className="App">


      <Routes>
      <Route path="/phones" element={<PhoneList />} />
      <Route path="/phones/:id" element={<PhoneDetails />} />
      </Routes>



    </div>
  );
}

export default App;
