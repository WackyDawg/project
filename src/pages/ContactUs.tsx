import React from "react";

function ContactUs() {
  return (
    <>
      <main className="min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

        <section className="max-w-3xl text-gray-300 space-y-6">
          <p>
            We'd love to hear from you! Whether you have questions, feedback, or
            need support, feel free to reach out to us through any of the
            methods below.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Email</h2>
            <p>
              For general inquiries or support, please email us at:{" "}
              <a
                href="mailto:support@downtik.to"
                className="text-blue-400 underline"
              >
                support@downtik.to
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Social Media</h2>
            <p>Follow and message us on Twitter:</p>
            <p>
              <a
                href="https://twitter.com/downtikto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                @downtikto
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Phone</h2>
            <p>You can also reach us by phone: +1 234 567 8900</p>
          </div>

          {/* Contact Form */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-[#25F4EE] to-[#FE2C55] py-3 px-6 rounded-lg font-bold hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default ContactUs;
