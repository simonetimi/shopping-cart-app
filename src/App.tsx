import './App.css';
import 'react-router-dom';

import Navbar from './components/Navbar';
import Shop from './components/Shop';

function App() {
  return (
    <>
      <Navbar />
      <Shop category="men's wear" />
    </>
  );
}

export default App;
