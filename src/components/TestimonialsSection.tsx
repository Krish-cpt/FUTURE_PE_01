import { useState, useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Priya Reddy", text: "The best salon in Sangareddy! My hair has never looked this good. The stylists really understand what you want.", rating: 5 },
  { name: "Rahul Sharma", text: "Great grooming experience. Clean place, friendly staff, and excellent haircut every single time.", rating: 5 },
  { name: "Sneha Patil", text: "Got my bridal styling done here and it was absolutely perfect. All my guests complimented my hair!", rating: 5 },
  { name: "Arjun Reddy", text: "Modern styles at affordable prices. The hair spa treatment was so relaxing. Highly recommended!", rating: 4 },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((a) => (a + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[active];

  return (
    <section className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3 font-medium">Testimonials</p>
        <h2 className="font-display text-3xl md:text-4xl text-salon-cream mb-12">What Our Clients Say</h2>

        <div className="min-h-[200px] flex flex-col items-center justify-center">
          <div className="flex gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={18}
                className={i < t.rating ? "fill-gold text-gold" : "text-salon-cream/20"}
              />
            ))}
          </div>
          <p className="text-salon-cream/80 text-lg italic leading-relaxed mb-6">"{t.text}"</p>
          <p className="text-gold font-display text-xl">{t.name}</p>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${i === active ? "bg-gold w-6" : "bg-salon-cream/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
