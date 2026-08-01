import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="page">
      <Navbar />
      <main className="content">
        <Hero />
        <div style={{ height: '60px' }} />
        <Features />
      </main>
      <Footer />
    </div>
  );
}