import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
      <div className="max-w-5xl w-full  ">
        <h1 className="text-4xl font-bold text-center text-primary mb-10">Contact & Support</h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info Section */}
          <div className="flex flex-col justify-center shadow-sm rounded-md p-5">
            <h2 className="text-2xl font-semibold mb-4">How can we help?</h2>
            <p className=" mb-4">
              If you have any questions, issues, or suggestions, feel free to reach out to our support team.
            </p>

            <ul className="space-y-3 s">
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
              <li>💬 Live Chat: Available in your dashboard</li>
              <li>⏰ Support Hours: Mon–Fri, 9 AM – 6 PM</li>
            </ul>
          </div>

          {/* Contact Form Section */}
          <div className="bg-secondary rounded-lg shadow p-6 flex flex-col justify-center">
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
    </div>
  );
};

export default Contact;
