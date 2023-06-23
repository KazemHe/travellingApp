import logo from './logo.svg';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import TravelingForm from './cmp/TravelingForm';
import TravelingTable from './cmp/TravelingTable';
import { AppHeader } from './cmp/AppHeader'
function App() {
  return (


    <Router>
    <div className="App">

    <header className="App-header">
          <AppHeader />
        </header>

      <main className="container">
        <Routes>
          <Route path="/table" element={<TravelingTable />} />
          <Route path="/" element={<TravelingForm />} />
        </Routes>


      </main>
    </div>
    </Router>
  );
}

export default App;
