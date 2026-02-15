import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Contact from './components/Contact';
import AiAssistant from './components/AiAssistant';

function App() {
  return (
    <div className="font-sans antialiased text-white selection:bg-accent-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Faq />
      </main>
      <Contact />
      <AiAssistant />
    </div>
  );
}

export default App;