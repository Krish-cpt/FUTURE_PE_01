import { MapPin, Phone, Clock } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24 bg-salon-cream">
    <div className="container mx-auto px-4">
      <p className="text-center text-gold tracking-[0.3em] uppercase text-sm mb-3 font-medium">Get In Touch</p>
      <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-16">Contact Us</h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="space-y-8">
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-full bg-salon-black flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h3 className="font-display text-lg text-foreground mb-1">Our Address</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                4-7-3/4/1/5/A/1, Marepally, Balaji Nagar,<br />
                Ahmed Nagar, Sangareddy, Telangana
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-full bg-salon-black flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h3 className="font-display text-lg text-foreground mb-1">Phone</h3>
              <p className="text-muted-foreground text-sm">+91 98765 43210</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-full bg-salon-black flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h3 className="font-display text-lg text-foreground mb-1">Hours</h3>
              <p className="text-muted-foreground text-sm">Mon – Sat: 9:00 AM – 8:00 PM<br />Sunday: 10:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden h-80 border border-border">
          <iframe
            title="Vogue Hair Salon Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30375.73!2d78.0800!3d17.6200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf0a0e9c00001%3A0x1!2sSangareddy%2C+Telangana!5e0!3m2!1sen!2sin!4v1"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
