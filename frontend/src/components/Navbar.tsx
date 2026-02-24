import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['About', 'Projects', 'Skills', 'Education', 'Achievements', 'Positions', 'Experience', 'Chat', 'Contact'];

  return (
    <nav className="fixed w-full top-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold gradient-text">Lakshita</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-accent transition-colors duration-300 text-sm font-medium"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden bg-secondary border-t border-white/10 max-h-96 overflow-y-auto">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-accent transition-colors duration-300 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
