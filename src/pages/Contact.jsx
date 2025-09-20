import React from "react";

export default function Contact() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div
        className="relative -z-1 h-[70vh] sm:h-155 bg-cover bg-center flex flex-col justify-end px-28 text-white "
        style={{ backgroundImage: "url('contact.png')" }}
      >
        <div className="mb-16">
               <h2 className="md:text-8xl font-bold">Contact Us</h2>
               <p className="text-4xl ">CONNECT WITH US</p>
            </div>
        </div>

      {/* Corporate Office Section */}
      <section className="bg-[#F2F2F2] py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl text-black mb-8">
            CONTACT <span className="text-blue-900">US</span>
          </h2>
        </div>
        <div className="max-w-3xl mx-auto bg-gray-190 text-black p-8 rounded-xl shadow-xl">
          <h3 className="text-xl font-bold text-[#001E55] mb-4">CORPORATE OFFICE</h3>
          <p>Bhubaneswar</p>
          <p>
            268, Puri - Cuttack Rd, near Okil Baug, Laxmisagar, Bhubaneswar,
            <br />
            Odisha 751006
          </p>
          <p className="mt-3">
            <span className="font-semibold">Tel:</span> +91 - 120 6918000
          </p>
          <p>
            <span className="font-semibold">Email:</span> info@aplopollo.com
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-bold mb-8">
            Get in <span className="text-blue-900">touch</span>
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name*"
              className="p-3 border rounded-md w-full"
            />
            <input
              type="email"
              placeholder="Email*"
              className="p-3 border rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Number*"
              className="p-3 border rounded-md w-full"
            />
            <input
              type="text"
              placeholder="City*"
              className="p-3 border rounded-md w-full"
            />
            <textarea
              rows="4"
              placeholder="Message*"
              className="p-3 border rounded-md w-full md:col-span-2"
            ></textarea>

            {/* Centered Submit Button */}
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-blue-900 hover:bg-blue-800 text-white py-3 px-16 sm:px-40 lg:px-50 rounded-md cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}