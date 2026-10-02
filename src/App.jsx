import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MarketsPage from './pages/MarketsPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ResourcesPage from './pages/ResourcesPage';
import StudioPage from './pages/StudioPage';
import ProjectModal from './components/ProjectModal';
import ContactModal from './components/ContactModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedMarketId, setSelectedMarketId] = useState('');
  const [selectedServiceId, setSelectedServiceId] = useState('');

  // Update browser document title based on current page
  useEffect(() => {
    const titles = {
      home: 'AWH Architects | Where Place Meets Purpose',
      markets: 'Markets | AWH Architects',
      services: 'Architecture & Consulting Services | AWH Architects',
      projects: 'Projects & Case Studies | AWH Architects',
      resources: 'Knowledge Hub & Guides | AWH Architects',
      studio: 'Studio, Team & Values | AWH Architects',
    };
    document.title = titles[currentPage] || 'AWH Architects';
  }, [currentPage]);

  const handleSelectMarket = (marketId) => {
    setSelectedMarketId(marketId);
    setCurrentPage('markets');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (serviceId) => {
    setSelectedServiceId(serviceId);
    setCurrentPage('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  const handleOpenContact = () => {
    setContactModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans selection:bg-[#3a5364] selection:text-white">
      {/* Global Header */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onOpenContact={handleOpenContact}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            setCurrentPage={setCurrentPage}
            onSelectProject={handleSelectProject}
            onSelectMarket={handleSelectMarket}
            onSelectService={handleSelectService}
            onOpenContact={handleOpenContact}
          />
        )}

        {currentPage === 'markets' && (
          <MarketsPage
            selectedMarketId={selectedMarketId}
            setSelectedMarketId={setSelectedMarketId}
            onSelectProject={handleSelectProject}
            onOpenContact={handleOpenContact}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            selectedServiceId={selectedServiceId}
            setSelectedServiceId={setSelectedServiceId}
            onSelectProject={handleSelectProject}
            onOpenContact={handleOpenContact}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            onSelectProject={handleSelectProject}
            onOpenContact={handleOpenContact}
          />
        )}

        {currentPage === 'resources' && (
          <ResourcesPage
            onOpenContact={handleOpenContact}
          />
        )}

        {currentPage === 'studio' && (
          <StudioPage
            onOpenContact={handleOpenContact}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        setCurrentPage={setCurrentPage}
        onOpenContact={handleOpenContact}
      />

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectMarket={handleSelectMarket}
          onOpenContact={handleOpenContact}
        />
      )}

      {/* Contact & Consultation Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        initialMarket={selectedMarketId}
      />
    </div>
  );
}
