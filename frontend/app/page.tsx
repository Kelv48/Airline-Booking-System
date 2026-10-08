import Navbar from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="home-main">
      <main className="home-main">
        <Hero />
        <div style={{ height: '60px' }} />
        <Features />
      </main>
      <Footer />
    </div>
  );
}