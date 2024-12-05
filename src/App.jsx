import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Paginas/Home/Home';
import Doacao from './Paginas/Doacao/Doacao';
import Livros from './Paginas/Livros/Livros';
import Navbar from './Components/Navbar/Navbar';

const App = () => (
  <Router basename="/">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Doacao" element={<Doacao />} />
      <Route path="/Livros" element={<Livros />} />
    </Routes>
  </Router>
);

export default App;