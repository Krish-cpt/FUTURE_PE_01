import heroImg from "@/assets/salon-hero.jpg";

const HeroSection = ({ onBookClick }: { onBookClick: () => void }) => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroImg}
      alt="Vogue Hair Salon interior"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-salon-black/70" />
    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in-up">
      <p className="text-gold tracking-[0.35em] uppercase text-sm mb-4 font-medium">
        Premium Salon in Sangareddy
      </p>
      <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-salon-cream leading-tight mb-6">
        Style That Speaks
      </h1>
      <p className="text-salon-cream/70 text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
        Premium hair styling and grooming services in Sangareddy. Your hair is your best accessory.
      </p>
      <button
        onClick={onBookClick}
        className="bg-gradient-gold text-salon-black px-10 py-4 rounded text-sm font-bold tracking-widest uppercase hover:shadow-gold transition-all duration-300 hover:scale-105"
      >
        Book Your Appointment
      </button>
    </div>
  </section>
);

export default HeroSection;
