import Hero from "./components/Hero";
import Services from "./components/Services";
import Partners from "./components/Partners";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 bg-white/80 backdrop-blur border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold text-xl tracking-tight">
            <span className="text-emerald-600">Oktavia</span>
            <span className="text-gray-900"> Energy</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#services" className="hover:text-emerald-700">Soluzioni</a>
            <a href="#contact" className="hover:text-emerald-700">Contatti</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Partners />
        <Contact />
      </main>

      <footer className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Oktavia SRL • Firenze</p>
          <p>
            Fotovoltaico • CER • E‑Mobility • EMS • Soluzioni finanziarie
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
