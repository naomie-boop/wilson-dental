import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Cabinet from "@/components/Cabinet";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FluidGradient from "@/components/FluidGradient";

export default function Home() {
  return (
    <>
      <FluidGradient />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Cabinet />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
