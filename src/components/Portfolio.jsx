const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
        <p className="text-lg mb-4">
          Here are some of my works. You can find more on my 
          <a href="https://www.behance.net/carla_ferrari" className="text-blue-500 underline">Behance profile</a>.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Aquí puedes añadir las imágenes de tu portafolio */}
          <div className="portfolio-item bg-gray-100 p-4">
            <img src="https://unsplash.com/photos/sample-image-1" alt="Project 1" className="w-full h-48 object-cover"/>
            <h3 className="text-xl font-semibold mt-2">Project 1</h3>
            <p className="text-gray-700">Description of project 1</p>
          </div>
          <div className="portfolio-item bg-gray-100 p-4">
            <img src="https://unsplash.com/photos/sample-image-2" alt="Project 2" className="w-full h-48 object-cover"/>
            <h3 className="text-xl font-semibold mt-2">Project 2</h3>
            <p className="text-gray-700">Description of project 2</p>
          </div>
          <div className="portfolio-item bg-gray-100 p-4">
            <img src="https://unsplash.com/photos/sample-image-3" alt="Project 3" className="w-full h-48 object-cover"/>
            <h3 className="text-xl font-semibold mt-2">Project 3</h3>
            <p className="text-gray-700">Description of project 3</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;