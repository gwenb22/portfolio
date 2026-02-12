import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

// Layout wrapper to conditionally show header
const Layout = ({ children }) => {
  const location = useLocation();
  const darkRoutes = ['/', '/projects', '/contact', '/about'];
  const isDark = darkRoutes.includes(location.pathname);
  // Keep footer only on Home or maybe on all dark pages? 
  // User only asked for header on all pages (done). 
  // Footer logic: {isHome && ...}. Let's keep footer logic as is for now unless asked.
  const isHome = location.pathname === '/';

  return (
    <div className={`min-h-screen font-inter ${isDark ? 'bg-[#111111] text-white' : 'bg-white text-black'}`}>
      <Header />
      <main>
        {children}
      </main>

      {isHome && (
        <footer className="container mx-auto px-10 pb-10 flex justify-between text-xs text-gray-500 font-medium uppercase tracking-wide">
          <div>Besson Gwenaëlle</div>
          <div>©'25</div>
        </footer>
      )}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
