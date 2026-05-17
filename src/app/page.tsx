import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Schedule from "@/components/Schedule";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-16">
        <Hero />
        <About />
        <Menu />
        <Schedule />
        <Testimonials />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
