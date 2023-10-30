import './App.css';
import { Routes } from 'react-router-dom';
import Login from './components/login/login';

function App() {
  // Checking if the authentication token key exists
  const authKey = localStorage.getItem('authKey');
  if (!authKey) {
    return <Login />;
  }
  return (
    <main>
      <Routes />
    </main>
  );
}

export default App;
