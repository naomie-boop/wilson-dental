import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueBanner from "@/components/ValueBanner";
import Cabinet from "@/components/Cabinet";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Assistants from "@/components/Assistants";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import DoctorNote from "@/components/DoctorNote";
import Footer from "@/components/Footer";
import FluidGradient from "@/components/FluidGradient";
import PageLoader from "@/components/PageLoader";

export default function Home() {
  return (
    <>
      <PageLoader />
      <FluidGradient />
      <Navbar />
      <Hero />
      <ValueBanner />
      <Cabinet />
      <Services />
      <Team />
      <Assistants />
      <Testimonials />
      <Contact />
      <DoctorNote />
      <Footer />
    </>
  );
}
