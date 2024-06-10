/* eslint-disable react/no-unescaped-entities */
const Clients = () => {
  return (
    <section id="clients" className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">Clients</h2>
        <p className="text-lg mb-4">Testimonials from my clients</p>
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-2">
              "It was a pleasure working with Carli. In addition to being a great person, she’s a great professional. She carried out each challenge with dedication and responsibility, always attentive to the smallest detail. I highlight your creativity and positive energy to work. Her contributions were always accurate and were key to the success of many advertising campaigns."
            </p>
            <p className="font-semibold">Anna, 32</p>
            <p className="text-gray-500">Marketing Manager | WeWork</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-2">
              "Working with Carli is a huge pleasure. She is an extremely creative person and approaches projects with the best disposition, understanding and resolving the client's requests and needs. On a personal level, she is always willing to help and transmits the best energy."
            </p>
            <p className="font-semibold">Lucia, 31</p>
            <p className="text-gray-500">Account Executive | The community</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-2">
              "Working with Carla is working with a person who loves what she does. Always willing to work as a team, providing creativity, organization and commitment, with an energy that’s contagious. I hope we can work together again soon!"
            </p>
            <p className="font-semibold">Facundo, 33</p>
            <p className="text-gray-500">Web developer | Montagne</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-2">
              "We work together and I can assure you that she’s a great professional. Responsible, good colleague, decisive and above all passionate about what she does. All of this makes it a pleasure to work with her."
            </p>
            <p className="font-semibold">Brenda, 26</p>
            <p className="text-gray-500">Graphic designer | Alma Buenos Aires</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
