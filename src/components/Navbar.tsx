import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ onBookClick }: { onBookClick: () => void }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-salon-black/95 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#home" className="font-display text-2xl text-gold tracking-wider">
          VOGUE
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-salon-cream/80 hover:text-gold transition-colors text-sm tracking-widest uppercase font-medium"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={onBookClick}
              className="bg-gradient-gold text-salon-black px-6 py-2 rounded text-sm font-semibold tracking-wider uppercase hover:shadow-gold transition-all duration-300"
            >
              Book Now
            </button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden text-gold" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-salon-black border-t border-gold/20 px-4 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-salon-cream/80 hover:text-gold transition-colors text-sm tracking-widest uppercase"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => { onBookClick(); setOpen(false); }}
                className="bg-gradient-gold text-salon-black px-6 py-2 rounded text-sm font-semibold tracking-wider uppercase w-full"
              >
                Book Now
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
