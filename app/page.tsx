import About from "@/components/About";
import Dashboard from "@/components/Dashboard";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Dashboard />
      <About />
      <Experience />
      <Testimonials />
      <Footer />
    </main>
  );
}
