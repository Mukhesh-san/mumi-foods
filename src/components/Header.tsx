import React, { useState } from 'react';
import { UtensilsCrossed, Menu, X } from 'lucide-react';
import FloatingButton from './common/FloatingButton';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-2">
      <nav className="container mx-auto px-4">
        <div className="backdrop-blur-md bg-forest-900/95 rounded-full border border-white/20 shadow-lg">
          <div className="container mx-auto px-6 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <UtensilsCrossed className="h-8 w-8 text-forest-200" />
              <span className="text-2xl font-bold text-forest-100">Mumi</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              <NavLink href="#menu">Menu</NavLink>
              <NavLink href="#process">How It Works</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <FloatingButton variant="forest" className="ml-4" href="#menu">
                Order Now
              </FloatingButton>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-forest-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 backdrop-blur-md bg-forest-900/95 rounded-3xl border border-white/20 shadow-lg">
            <div className="flex flex-col space-y-4 p-6">
              <NavLink href="#menu">Menu</NavLink>
              <NavLink href="#process">How It Works</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <FloatingButton variant="forest" href="#menu">
                Order Now
              </FloatingButton>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="text-forest-200 hover:text-white transition-colors duration-300"
    >
      {children}
    </a>
  );
}