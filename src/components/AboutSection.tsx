const AboutSection = () => (
  <section id="about" className="py-24 bg-gradient-dark">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3 font-medium">Who We Are</p>
      <h2 className="font-display text-3xl md:text-4xl text-salon-cream mb-8">About Vogue Hair Salon</h2>
      <p className="text-salon-cream/70 text-lg leading-relaxed mb-6">
        At Vogue Hair Salon, we believe your hair is your best accessory. Located in the heart of Sangareddy,
        we offer modern haircuts, professional styling, and personalized grooming services tailored to your unique style.
      </p>
      <p className="text-salon-cream/70 text-lg leading-relaxed mb-8">
        With over a decade of experience, our skilled stylists stay ahead of trends to bring you the latest in
        hair fashion — from classic cuts to bold transformations.
      </p>
      <div className="flex justify-center gap-12 mt-12">
        {[
          { num: "10+", label: "Years Experience" },
          { num: "5000+", label: "Happy Clients" },
          { num: "4", label: "Expert Stylists" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-3xl text-gold mb-1">{s.num}</p>
            <p className="text-salon-cream/60 text-xs uppercase tracking-widest">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
