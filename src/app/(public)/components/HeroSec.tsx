import Image from "next/image";
import React from "react";

function HeroSec() {
  return (
    <div
      className="pt-24 ">
      <div className="flex lg:flex-row flex-col items-center mt-[10vh] justify-between">
        <div className="flex flex-col items-center mx-10 border-r-0 lg:border-r-4 border-b-4 lg:border-b-0 pr-2 lg:py-5 py-2 border-orange-500">
          <h1 className="text-orange-500 md:text-4xl sm:text-3xl text-2xl font-extrabold  mb-4 text-center leading-tight">
            Your Ride Awaits
          </h1>
          <p className="md:text-lg sm:text-sm text-xs font-semibold text-end text-orange-500 max-w-lg">
            Where the Road Meets Your Destination
          </p>
        </div>
        <Image
          src="/jeep.png"
          alt="jeep"
          width={1000}
          height={1000}
          className="lg:h-[430px] lg:w-[600px] md:h-[530px] md:w-[700px] sm:h-[330px] sm:w-[500px] md:mt-10"
        />
      </div>
    </div>
  );
}

export default HeroSec;
