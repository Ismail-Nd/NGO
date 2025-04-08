import React from "react";
import LogoCarousel from "./carusel";
import Stats from "../components/stats";

function stoppoverty() {
  return (
    <>
      <div className="flex flex-col h-100 items-center justify-center">
        <h1 className="text-2xl text-gray-400 font-normal">
          We are here to stop poverty
        </h1>
        <p className="text-4xl text-center w-200 mt-10 font-medium">
          We are fundraising for the people who are fighting against poverty
        </p>
        <button className="bg-red-500 text-lg text-white px-7 py-3 rounded-lg mt-10 duration-300 ease-out hover:bg-black ">
          Donate Now
        </button>
      </div>
      <LogoCarousel />
      <Stats />

    </>
  );
}

export default stoppoverty;
