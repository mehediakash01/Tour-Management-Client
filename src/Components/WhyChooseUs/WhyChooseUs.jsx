import { FaShieldAlt, FaWifi, FaSolarPanel, FaBicycle } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className=" my-10">
     <h1 className="lg:text-5xl text-3xl font-bold text-accent text-center my-4">why You should Trust Us</h1>
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center gap-10 bg-[#f4f8f4]  py-16">
        <div>
          <span className="bg-green-100 text-green-700 font-medium px-3 py-1 rounded-full text-sm">
            Why choose us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-accent my-4 leading-tight">
            Why travelers love our <br /> tour experiences
          </h2>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div>
              <div className="text-green-600 text-2xl mb-2">
                <FaShieldAlt />
              </div>
              <h4 className="font-semibold">Best Security</h4>
              <p className="text-sm text-gray-600">
                Your safety is our top priority, with expert guides and secure accommodations.
              </p>
            </div>

            <div>
              <div className="text-green-600 text-2xl mb-2">
                <FaWifi />
              </div>
              <h4 className="font-semibold">Free Internet</h4>
              <p className="text-sm text-gray-600">
                Stay connected throughout your journey with complimentary Wi-Fi access.
              </p>
            </div>

            <div>
              <div className="text-green-600 text-2xl mb-2">
                <FaSolarPanel />
              </div>
              <h4 className="font-semibold">Eco-Friendly Power</h4>
              <p className="text-sm text-gray-600">
                We power our camps and lodges with solar energy to protect the environment.
              </p>
            </div>

            <div>
              <div className="text-green-600 text-2xl mb-2">
                <FaBicycle />
              </div>
              <h4 className="font-semibold">Adventure Biking</h4>
              <p className="text-sm text-gray-600">
                Explore off-road trails and scenic routes with our guided mountain biking tours.
              </p>
            </div>
          </div>
        </div>

        <div>
          <img src="https://i.ibb.co/pB1qBHV6/experience.png" alt="Why Choose Us" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
