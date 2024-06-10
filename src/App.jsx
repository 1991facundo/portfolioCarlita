import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import Contact from './components/Contact';
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
      
        <About />
        <Services />
        <Portfolio />
        <Clients />
        <Contact />
      </main>
    </div>
  );
}

export default App;
