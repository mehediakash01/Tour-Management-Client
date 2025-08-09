import React from "react";
import useTitle from "../../Hooks/useTitle";
import support from "../../assets/animatedImage/support.png"
import { IoIosContacts } from "react-icons/io";
const Contact = () => {
  useTitle("contact-us");
  return (
    <div className="">
      <div className="w-11/12 mx-auto  ">
        <h1 className="text-4xl font-bold  text-primary mt-12 flex items-center gap-1 justify-center "><IoIosContacts /> Contact & Support</h1>

        <div className=" flex items-center justify-center">
          {/* Contact Info Section */}
          <div className="flex flex-col justify-center text-2xl  p-5">
            <h2 className="text-2xl font-semibold mb-4">How can we help?</h2>
            <p className=" mb-4">
              If you have any questions, issues, or suggestions, feel free to reach out to our support team.
            </p>

            <ul className="space-y-3 ">
              <li>
                📧 Email:{" "}
                <a
                  href="mailto:support@yourfreelanceapp.com"
                  className="text-primary underline"
                >
                  support@mehedi.akash.dev.com
                </a>
              </li>
              <li>📞 Phone: +880-1234-567890</li>
              <li>⏰ Support Hours: Mon–Fri, 9 AM – 6 PM</li>
            </ul>


        
          </div>

          <div>
            <img src={support} className="w-250" alt="" />
          </div>

        
        </div>
              {/* Contact Form Section */}
          <div className="bg-accent w-auto mx-auto flex    flex-col  justify-center items-center p-6 my-12 rounded-md">
            <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
            <form onSubmit={e=>e.target.preventDefault()} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
                required
              />
              <textarea
                placeholder="Your Message"
                className="textarea textarea-bordered w-full h-32"
                required
              ></textarea>
              <button onClick={()=>alert('Thank you for your time')} className="btn btn-primary w-full">Send Message</button>
            </form>
          </div>
      </div>
    </div>
  );
};

export default Contact;
