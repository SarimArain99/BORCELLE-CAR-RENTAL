import React from "react";

function Contact() {
  return (
    <form
      className="bg-[#363636] flex flex-col justify-center py-12 px-10 pt-24"
      action="https://api.web3forms.com/submit"
      method="POST"
    >
      <input
        type="hidden"
        name="access_key"
        value="97b9413e-2ea8-4b21-921b-f87d710755d6"
      />

      <h2 className="text-4xl font-bold text-orange-500 mb-8 text-center">
        Contact Us
      </h2>

      <div className="flex flex-col mb-6">
        <label
          htmlFor="name"
          className="text-lg font-semibold mb-2 text-orange-500"
        >
          Full Name
        </label>
        <input
          required
          type="text"
          id="name"
          name="fullName"
          placeholder="Enter Your Full Name"
          className="p-4 rounded-lg bg-gray-800 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 duration-300"
        />
      </div>

      <div className="flex flex-col mb-6">
        <label
          htmlFor="email"
          className="text-lg font-semibold mb-2 text-orange-500"
        >
          Email
        </label>
        <input
          required
          type="email"
          id="email"
          name="email"
          placeholder="Enter Your Email"
          className="p-4 rounded-lg bg-gray-800 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 duration-300"
        />
      </div>

      <div className="flex flex-col mb-6">
        <label
          htmlFor="subject"
          className="text-lg font-semibold mb-2 text-orange-500"
        >
          Subject
        </label>
        <input
          required
          type="text"
          id="subject"
          name="subject"
          placeholder="Enter the Subject"
          className="p-4 rounded-lg bg-gray-800 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 duration-300"
        />
      </div>

      <div className="flex flex-col mb-6">
        <label
          htmlFor="message"
          className="text-lg font-semibold mb-2 text-orange-500"
        >
          Message
        </label>
        <textarea
          required
          name="message"
          id="message"
          placeholder="Write Your Message Here"
          rows={6}
          className="p-4 rounded-lg bg-gray-800 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 duration-300"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold w-36 h-12 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out mx-auto"
      >
        Send Message
      </button>
    </form>
  );
}

export default Contact;
