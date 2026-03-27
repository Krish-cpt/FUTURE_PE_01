import { Scissors, Sparkles, Palette, Crown } from "lucide-react";

const services = [
  { icon: Scissors, title: "Haircut & Styling", desc: "Modern cuts tailored to your face shape and personal style." },
  { icon: Sparkles, title: "Hair Spa & Treatments", desc: "Deep conditioning and revitalizing treatments for healthy hair." },
  { icon: Palette, title: "Hair Coloring", desc: "From subtle highlights to bold transformations — expertly done." },
  { icon: Crown, title: "Bridal & Party Styling", desc: "Look your absolute best on your most special occasions." },
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-salon-cream">
    <div className="container mx-auto px-4">
      <p className="text-center text-gold tracking-[0.3em] uppercase text-sm mb-3 font-medium">What We Offer</p>
      <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-16">Our Services</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s) => (
          <div
            key={s.title}
            className="group bg-card rounded-lg p-8 text-center border border-border hover:border-gold/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-gold"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-salon-black flex items-center justify-center group-hover:bg-gradient-gold transition-all duration-300">
              <s.icon className="w-7 h-7 text-gold group-hover:text-salon-black transition-colors duration-300" />
            </div>
            <h3 className="font-display text-xl text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
