import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-salon-black border-t border-gold/20 py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <p className="font-display text-2xl text-gold mb-3 tracking-wider">VOGUE</p>
          <p className="text-salon-cream/60 text-sm leading-relaxed">
            Step in with confidence.<br />Walk out with style.
          </p>
        </div>
        <div>
          <p className="text-salon-cream font-semibold text-sm uppercase tracking-widest mb-4">Quick Links</p>
          <ul className="space-y-2">
            {["Home", "Services", "About", "Gallery", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-salon-cream/60 hover:text-gold transition-colors text-sm">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-salon-cream font-semibold text-sm uppercase tracking-widest mb-4">Follow Us</p>
          <div className="flex gap-4">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold/70 hover:bg-gold hover:text-salon-black transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gold/10 pt-6 text-center">
        <p className="text-salon-cream/40 text-xs">© 2026 Vogue Hair Salon, Sangareddy. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
