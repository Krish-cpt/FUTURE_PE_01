import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BookingDialog from "@/components/BookingDialog";

const Index = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <Navbar onBookClick={() => setBookingOpen(true)} />
      <HeroSection onBookClick={() => setBookingOpen(true)} />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <BookingDialog open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
};

export default Index;
