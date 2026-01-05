import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-body selection:bg-primary-200 selection:text-primary-900">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;