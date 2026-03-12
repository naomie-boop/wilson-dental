import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollRevealText from "@/components/ScrollRevealText";
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
      <ScrollRevealText
        text="Un cabinet 100% numérique où convivialité rime avec excellence. Imprimante 3D, outils digitalisés, studio photo et écrans au plafond pour votre détente : ici, on prend soin de toute la famille, des plus petits aux plus grands. Urgences acceptées, on ne refuse jamais un patient."
        className="font-[family-name:var(--font-playfair)] text-2xl font-bold leading-snug text-foreground sm:text-3xl lg:text-4xl"
        heightVh={200}
        ghostOpacity={0.12}
        speed={1.3}
      />
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
