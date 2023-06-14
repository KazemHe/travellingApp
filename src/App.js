import logo from './logo.svg';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import TravilingForm from './cmp/TravilingForm';
import TravilingTable from './cmp/TravilingTable';
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
          <Route path="/table" element={<TravilingTable />} />
          <Route path="/" element={<TravilingForm />} />
        </Routes>


      </main>
    </div>
    </Router>
  );
}

export default App;
