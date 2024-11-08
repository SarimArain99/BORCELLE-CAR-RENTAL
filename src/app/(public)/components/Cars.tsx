import Image from "next/image";
import React from "react";

function Cars() {
  return (
    <div className="py-10">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mx-6">
        {[
          {
            image: "/hummer.png",
            title: "GMC Hummer",
            price: "$5500/Day",
          },
          {
            image: "/toyota.png",
            title: "Toyota Thundra",
            price: "$4800/Day",
          },

          {
            image: "/blueJeep.png",
            title: "Jeep",
            price: "$4000/Day",
          },
          {
            image: "/jeep.png",
            title: "Off-Road Jeep",
            price: "$6000/Day",
          },
        ].map((car, index) => (
          <div
            key={index}
            className="w-auto h-[420px] bg-white rounded-lg shadow-lg shadow-orange-300 overflow-hidden flex flex-col items-center transform transition duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:bg-gray-50"
          >
            <div className="w-full h-60 bg-gray-200 flex items-center justify-center overflow-hidden">
              <Image
                src={car.image}
                alt={car.title}
                width={1000}
                height={1000}
                className="h-52 w-auto object-cover rounded-t-lg transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6 w-full flex flex-col items-center text-center">
              <h2 className="text-2xl font-semibold text-gray-800">
                {car.title}
              </h2>
              <p className="text-lg font-medium text-orange-600 mt-2">
                {car.price}
              </p>
              <button className="mt-4 px-5 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cars;
