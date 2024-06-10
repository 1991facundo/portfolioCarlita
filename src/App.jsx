import About from './components/About';
import './index.css';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <nav className="container mx-auto p-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            Carla Ferrari
          </div>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:underline">About me</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
            <li><a href="#clients" className="hover:underline">Clients</a></li>
            <li><a href="#contact" className="hover:underline">Contact me</a></li>
          </ul>
        </nav>
      </header>
      <main className="mt-16">
        {/* Secciones de la página */}
        <About />
        <section id="services" className="py-20 bg-gray-200">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-4">Services</h2>
            <p>Do you want to communicate your product...</p>
          </div>
        </section>
        <section id="portfolio" className="py-20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
            <p>Here are some of my works...</p>
          </div>
        </section>
        <section id="clients" className="py-20 bg-gray-200">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-4">Clients</h2>
            <p>Testimonials from my clients...</p>
          </div>
        </section>
        <section id="contact" className="py-20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-4">Contact me</h2>
            <p>Get in touch with me...</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
