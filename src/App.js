import './App.css';
import { Route, Routes } from 'react-router-dom';
import Cars from './components/Cars';
import Main from './components/Main';
import NavMenu from './components/NavMenu';

function App() {
  return (
    <main>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Cars" element={<Cars />} />
      </Routes>
    </main>
  );
}

export default App;
