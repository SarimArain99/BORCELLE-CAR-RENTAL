import React from "react";
import HeroSec from "./components/HeroSec";
import Story from "./components/Story";
import Search from "./components/Search";
import Cars from "./components/Cars";

function page() {
  return (
    <div className="bg-[#363636]">
      <HeroSec />
      <Story />
      <Search />
      <div className="mt-10">
        <h1 className="my-5 text-center text-4xl font-extrabold text-orange-500">
          Our Best Offers
        </h1>
        <Cars />
      </div>
    </div>
  );
}

export default page;
