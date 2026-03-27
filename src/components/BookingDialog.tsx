import { useState } from "react";
import { X } from "lucide-react";
import { toast } from "sonner";

const services = ["Haircut & Styling", "Hair Spa & Treatments", "Hair Coloring", "Bridal & Party Styling"];

const BookingDialog = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "" });

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Appointment booked! We'll confirm shortly.", { duration: 5000 });
    setForm({ name: "", phone: "", service: "", date: "" });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-salon-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-card rounded-lg border border-gold/30 w-full max-w-md p-8 shadow-gold">
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
          <X size={20} />
        </button>
        <h3 className="font-display text-2xl text-foreground mb-2">Book an Appointment</h3>
        <p className="text-muted-foreground text-sm mb-6">Fill in the details and we'll get back to you.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
          />
          <input
            required
            placeholder="Phone Number"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-4 py-3 rounded bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
          />
          <select
            required
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className="w-full px-4 py-3 rounded bg-secondary border border-border text-foreground text-sm focus:outline-none focus:border-gold transition-colors"
          >
            <option value="">Select Service</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <input
            required
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="w-full px-4 py-3 rounded bg-secondary border border-border text-foreground text-sm focus:outline-none focus:border-gold transition-colors"
          />
          <button
            type="submit"
            className="w-full bg-gradient-gold text-salon-black py-3 rounded font-bold text-sm tracking-widest uppercase hover:shadow-gold transition-all duration-300"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingDialog;
