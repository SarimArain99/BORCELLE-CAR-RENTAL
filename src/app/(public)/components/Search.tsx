import React from "react";

function Search() {
  return (
    <div className="bg-[#363636] py-10 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 p-6 lg:px-32">
      <div className="flex justify-center">
        <select
          name="Brand"
          className="w-72 bg-white text-orange-500 px-4 py-3 rounded-md shadow-lg outline-none focus:ring-2 focus:ring-orange-500 text-base transition duration-300"
        >
          <option value="" hidden>
            Brands
          </option>
          <option value="BMW">BMW</option>
          <option value="Audi">Audi</option>
          <option value="Toyota">Toyota</option>
        </select>
      </div>

      <div className="flex justify-center">
        <select
          name="Type"
          className="w-72 bg-white text-orange-500 px-4 py-3 rounded-md shadow-lg outline-none focus:ring-2 focus:ring-orange-500 text-base transition duration-300"
        >
          <option value="" hidden>
            Type
          </option>
          <option value="4 Seater">4 Seater</option>
          <option value="2 Seater">2 Seater</option>
          <option value="Diesel Engine">Diesel Engine</option>
        </select>
      </div>

      <div className="flex justify-center">
        <select
          name="Price"
          className="w-72 bg-white text-orange-500 px-4 py-3 rounded-md shadow-lg outline-none focus:ring-2 focus:ring-orange-500 text-base transition duration-300"
        >
          <option value="" hidden>
            Price
          </option>
          <option value="$5000/Day">$5000/Day</option>
          <option value="$4000/Day">$4000/Day</option>
          <option value="$4500/Day">$4500/Day</option>
        </select>
      </div>

      <div className="flex justify-center">
        <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 w-44 h-14 text-xl">
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
