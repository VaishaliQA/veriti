import React from "react";

const Summary = () => {
  return (
    // Dashboard container
    <div className="py-8 py-12 bg-indigo-100 overflow-y-hidden rounded-lg">
        <h1 className="my-2 p-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Summary</h1>
    {/* Summary */}
    <div className="flex flex-wrap flex-row">
      <div className="mx-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="p-5">
          <a href="/">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Your Top Contribution
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            You've donated ${Math.floor(Math.random() * 1000)} to{" "}
            <span className="mb-1 bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-800">
              Healthcare
            </span>
          </p>
        </div>
      </div>
      <div className="mx-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="p-5">
          <a href="/">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Your Portfolio
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            You've donated to {Math.floor(Math.random() * 10)} categories.
          </p>
        </div>
      </div>
    </div>
    
    {/* Downloads */}
    <div className="flex flex-wrap flex-row">
        <div className="mx-2 py-2 max-w-sm">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <span>Download Tax Forms</span>
                </button>
        </div>
        <div className="mx-2 py-2 max-w-sm">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <span>Download Donation Summary</span>
                </button>
        </div>
    </div>
    </div>
  );
};

export default Summary;
