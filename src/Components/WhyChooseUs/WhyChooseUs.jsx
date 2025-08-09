import { FaShieldAlt, FaWifi, FaSolarPanel, FaBicycle } from "react-icons/fa";
import choose from "../../assets/animatedImage/why.png";
import { motion } from "framer-motion";
const WhyChooseUs = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }} // Start hidden and shifted down
      whileInView={{ opacity: 1, y: 0 }} // Fade in and move up when in view
      transition={{ duration: 0.8 }}
      className=" my-10"
    >
      <h1 className="lg:text-5xl text-3xl font-bold text-accent text-center my-12">
        Why You Should Trust Us
      </h1>
      <div className="w-11/12 mx-auto bg-secondary/10 p-10  flex items-center justify-between flex-col-reverse lg:flex-row">
        <div className="flex gap-5">
          {/* <h2 className="text-4xl md:text-5xl font-bold text-accent my-4 leading-tight">
            Why travelers love our <br /> tour experiences
          </h2> */}

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div>
              <div className="text-green-600 text-2xl mb-2">
                <FaShieldAlt />
              </div>
              <h4 className="font-semibold">Best Security</h4>
              <p className="text-sm text-gray-600">
                Your safety is our top priority, with expert <br /> guides and
                secure accommodations.
              </p>
            </div>

            <div>
              <div className="text-green-600 text-2xl mb-2">
                <FaWifi />
              </div>
              <h4 className="font-semibold">Free Internet</h4>
              <p className="text-sm text-gray-600">
                Stay connected throughout your journey <br /> with complimentary
                Wi-Fi access.
              </p>
            </div>

            <div>
              <div className="text-green-600 text-2xl mb-2">
                <FaSolarPanel />
              </div>
              <h4 className="font-semibold">Eco-Friendly Power</h4>
              <p className="text-sm text-gray-600">
                We power our camps and lodges with solar <br /> energy to
                protect the environment.
              </p>
            </div>

            <div>
              <div className="text-green-600 text-2xl mb-2">
                <FaBicycle />
              </div>
              <h4 className="font-semibold">Adventure Biking</h4>
              <p className="text-sm text-gray-600">
                Explore off-road trails and scenic routes with <br /> our guided
                mountain biking tours.
              </p>
            </div>
          </div>
        </div>

        <div>
          <img src={choose} className="w-[450px]" alt="Why Choose Us" />
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
