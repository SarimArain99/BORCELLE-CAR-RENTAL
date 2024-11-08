import Image from "next/image";
import React from "react";

function Story() {
  return (
    <div className="flex items-center justify-between lg:flex-row-reverse flex-col">
      <Image
        src="/hummer.png"
        alt=""
        height={1000}
        width={1000}
        className="lg:h-[330px] lg:w-[600px] md:h-[430px] md:w-[700px] sm:h-[330px] sm:w-[500px] md:mt-10 lg:order-2 order-1"
      />
      <div className="py-10 px-6 md:px-16 lg:px-20">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-orange-500 mb-6">
          Our Story
        </h1>
        <p className="text-base sm:text-lg lg:text-lg text-orange-500 text-justify max-w-3xl">
          At <strong className="text-orange-500">BROCELLE CAR RENTAL</strong>,
          our journey began with a simple yet powerful vision: to make every
          journey unforgettable. Founded by a passionate team of car enthusiasts
          and innovators, we set out to redefine how people experience travel.
        </p>
      </div>
    </div>
  );
}

export default Story;
