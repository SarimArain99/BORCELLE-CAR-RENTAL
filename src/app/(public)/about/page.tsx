import React from "react";

function page() {
  return (
    <section className="bg-[#363636] text-white py-32">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-extrabold text-orange-500">
            Welcome to BROCELLE CAR RENTAL
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-6 leading-relaxed max-w-4xl mx-auto">
            At BROCELLE CAR RENTAL, we&apos;re dedicated to turning every
            journey into an exceptional experience. Born from a passion for
            travel and a commitment to quality, our company provides top-tier
            vehicles and seamless rental services to travelers, adventurers, and
            locals alike. Whether you&apos;re seeking the thrill of a luxury
            sports car, the comfort of a premium SUV, or the efficiency of a
            compact car, BROCELLE CAR RENTAL is your trusted partner on the
            road.
          </p>
        </div>

        <div className="mt-10 mb-16 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-justify">
            From our humble beginnings, we&apos;ve expanded to become a go-to
            choice in car rentals, recognized for our personalized service, a
            meticulously maintained fleet, and competitive pricing. We
            understand that every trip is unique, and we&apos;re here to provide
            more than just a rental; we offer a tailored experience that suits
            your needs, budget, and style.
          </p>
        </div>

        <div className="mt-10 text-gray-300 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-orange-500 mb-6">
            What We Offer
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-justify">
            Our diverse fleet of vehicles is handpicked to cater to a variety of
            preferences. Whether you&apos;re embarking on a scenic road trip,
            require a business-class vehicle, or need a reliable car for a
            weekend getaway, BROCELLE CAR RENTAL has you covered. Our vehicles
            undergo regular inspections to ensure they meet the highest
            standards of safety, comfort, and style, allowing you to drive with
            peace of mind.
          </p>
        </div>

        <div className="mt-10 text-gray-300 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-orange-500 mb-6">
            Why Choose BROCELLE CAR RENTAL?
          </h2>
          <ul className="list-disc list-inside space-y-6 text-lg md:text-xl leading-relaxed text-justify">
            <li>
              <span className="font-semibold text-white">
                Exceptional Service:
              </span>
              Our team is here to make your rental experience as smooth as
              possible. With a seamless booking process and responsive customer
              service, we prioritize your convenience and satisfaction every
              step of the way.
            </li>
            <li>
              <span className="font-semibold text-white">
                Quality and Reliability:
              </span>
              Each vehicle in our fleet is thoroughly inspected and maintained
              to guarantee the best performance. Our commitment to quality
              ensures that you can depend on BROCELLE CAR RENTAL to keep you on
              the road, hassle-free.
            </li>
            <li>
              <span className="font-semibold text-white">
                Affordable Options:
              </span>
              We believe that luxury and quality should be accessible to
              everyone. At BROCELLE CAR RENTAL, we offer competitive pricing and
              exclusive deals that give you incredible value without
              compromising on quality.
            </li>
          </ul>
        </div>

        <div className="mt-10 text-gray-300 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-orange-500 mb-6">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-justify">
            Our mission at BROCELLE CAR RENTAL is to redefine car rental
            experiences by blending luxury, convenience, and affordability. We
            aim to build long-lasting relationships with our clients, fueled by
            trust, transparency, and an unwavering dedication to providing
            excellence.
          </p>
          <p className="text-lg md:text-xl mt-6 leading-relaxed text-justify">
            At BROCELLE CAR RENTAL, we believe that your journey begins the
            moment you step into one of our vehicles. Let us take you where you
            need to go, while you enjoy the ride.
          </p>
        </div>
      </div>
    </section>
  );
}

export default page;
