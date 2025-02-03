import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Process from './components/Process';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import FloatingElements from './components/common/FloatingElements';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="relative">
        <FloatingElements />
        <Hero />
        <Menu />
        <Process />
        <Newsletter />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-6 relative">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Mumi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}