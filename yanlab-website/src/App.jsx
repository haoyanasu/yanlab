import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Research from './pages/Research';
import People from './pages/People';
// import Publications from './pages/Publications';
import News from './pages/News';
import Resources from './pages/Resources';
import './App.css';

function AppContent() {
  return (
    <div className="app-wrapper">
      <div className="navbar-container">
        <Navbar />
      </div>
      {/* All pages now render directly without wrapper - each has its own background */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/team" element={<People />} />
  {/* <Route path="/publications" element={<Publications />} /> */}
        <Route path="/news" element={<News />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
