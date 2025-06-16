import { FaShieldAlt, FaWifi, FaSolarPanel, FaBicycle } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#f4f8f4] py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center gap-10">
        <div>
          <span className="bg-green-100 text-green-700 font-medium px-3 py-1 rounded-full text-sm">
            Why choose us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold my-4 leading-tight">
            People why choose our <br /> travel adventure
          </h2>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div>
              <div className="text-green-600 text-2xl mb-2">
                <FaShieldAlt />
              </div>
              <h4 className="font-semibold">Best security</h4>
              <p className="text-sm text-gray-600">
                We denounce with righteous indignation and dislike.
              </p>
            </div>

            <div>
              <div className="text-green-600 text-2xl mb-2">
                <FaWifi />
              </div>
              <h4 className="font-semibold">Free internet</h4>
              <p className="text-sm text-gray-600">
                We denounce with righteous indignation and dislike.
              </p>
            </div>

            <div>
              <div className="text-green-600 text-2xl mb-2">
                <FaSolarPanel />
              </div>
              <h4 className="font-semibold">Solar energy</h4>
              <p className="text-sm text-gray-600">
                We denounce with righteous indignation and dislike.
              </p>
            </div>

            <div>
              <div className="text-green-600 text-2xl mb-2">
                <FaBicycle />
              </div>
              <h4 className="font-semibold">Mountain biking</h4>
              <p className="text-sm text-gray-600">
                We denounce with righteous indignation and dislike.
              </p>
            </div>
          </div>
        </div>

        <div>
          <img src="https://i.ibb.co/pB1qBHV6/experience.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
