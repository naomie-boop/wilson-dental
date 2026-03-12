import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ScrollRevealText from "@/components/ScrollRevealText";
import Cabinet from "@/components/Cabinet";
import Services from "@/components/Services";
import Team from "@/components/Team";
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
      <About />
      <ScrollRevealText
        text="Au cabinet Wilson Dental, nous avons pour mission de fournir des soins dentaires d'excellence, alliant rigueur scientifique et technologies de pointe. Chaque traitement est pensé pour offrir une expérience alliant précision, confort et sécurité, répondant avec rigueur aux attentes de nos patients."
        className="font-[family-name:var(--font-playfair)] text-2xl font-bold leading-snug text-foreground sm:text-3xl lg:text-4xl"
        heightVh={200}
        ghostOpacity={0.12}
        speed={1.3}
      />
      <Services />
      <Team />
      <Cabinet />
      <Testimonials />
      <Contact />
      <DoctorNote />
      <Footer />
    </>
  );
}
