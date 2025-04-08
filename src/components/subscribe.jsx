import React from "react";

function subscribe() {
  return (
    <div className="flex flex-row justify-center items-center bg-white py-40 px-10">
      <div className="w-300 flex flex-row justify-between py-10 px-10 gap-3 border-0.5 border-gray-600 rounded-lg shadow-lg shadow-black bg-white">
        <div className="flex flex-col justify-center mb-4 gap-3 w-150">
          <p className="text-xl text-gray-500">Newsletter</p>
          <h1 className="font-medium text-2xl">
            To get weekly & monthly news, Subscribe to our newsletter.
          </h1>
        </div>
        <div className="flex flex-row justify-center items-center w-120">
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            class="w-full px-4 py-3 border border-red-600 rounded-l-lg shadow-sm focus:outline-none focus:ring-0 "
          />
          <button className="text-white bg-red-600 px-5 py-3 border-1 rounded-r-lg hover:bg-gray-900 border-red-600 hover:border-gray-900 transition duration-300 ease-in-out cursor-pointer"> 
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default subscribe;
