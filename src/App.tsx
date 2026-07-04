import SEO from './components/SEO';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import TechStack from './components/TechStack';
import CTABanner from './components/CTABanner';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import About from './sections/About';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-bg-light">
      <SEO />
      <Header />
      <main>
        <Hero />
        <TechStack />      {/* ← Новый блок со стеком */}
        <CTABanner />      {/* ← Новый CTA-блок */}
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;