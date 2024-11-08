import React from "react";

function Footer() {
  return (
    <footer className="bg-[#363636] text-white py-10 px-6">
      <div className="grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-8 text-center sm:text-left">
        <div>
          <h2 className="text-xl font-bold mb-2">Subscribe Now</h2>
          <p className="text-sm leading-relaxed">
            Join our newsletter to stay updated on the latest offers, new
            releases, and exciting events. Enter your email and subscribe today
            to be the first to know!
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">Information</h2>
          <p className="text-sm leading-relaxed">
            Discover more about our company, mission, and the values that drive
            us. We are committed to offering exceptional services and ensuring
            customer satisfaction.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">Helpful Links</h2>
          <p className="text-sm leading-relaxed">
            Explore resources like FAQs, our support center, and guides designed
            to help you get the most out of our offerings and navigate through
            our services easily.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">Investments</h2>
          <p className="text-sm leading-relaxed">
            Learn more about investment opportunities with us, from real estate
            to stocks. We offer guidance and support for those looking to make
            smart financial choices.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <p className="text-sm leading-relaxed">
            Have any questions? Reach out to us via phone or email, and our team
            will be happy to assist you. We&apos;re here to support you with any
            inquiries.
            <br />
            Phone: <strong> +1(123456789)</strong>
            <br />
            Email:
            <strong> abc99gmail.com</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
