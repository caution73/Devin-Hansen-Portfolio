import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About'
import Bio from './pages/Bio'
import Algorithms from './pages/Algorithms'
import WebApps from './pages/WebApps'
import { Routes, Route } from 'react-router-dom'
import Qualifications from './pages/Qualifications';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/Home" element={ <Home />} />
        <Route path="/about" element={ <About />} />
        <Route path="/qualifications" element={ <Qualifications />} />
        <Route path="/bio" element={ <Bio />} />
        <Route path="/algorithms" element={ <Algorithms />} />
        <Route path="/webapps" element={ <WebApps />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
