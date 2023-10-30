import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Cars from './components/Cars';
import Main from './components/Main';
import NavMenu from './components/NavMenu';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <button onClick={toggleMenu} type="button">Menu</button>
      {isOpen && <NavMenu />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Cars" element={<Cars />} />
      </Routes>
    </main>
  );
}

export default App;
