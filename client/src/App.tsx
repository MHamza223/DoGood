import React from "react";
import "./tailwind.css"; 
import NewsFeed from './Components/NewsFeed.tsx';


function App() {
  return (
    <div className="App bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-teal-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">DoGood</h1>
          <div className="button-group flex space-x-2">
            <button
              type="button"
              className="text-white bg-teal-700 hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Home
            </button>
            <button
              type="button"
              className="text-teal-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Profile
            </button>
          </div>
        </div>
      </header>

      {/* Global News Section */}
      <section className="p-6">
        <h2 className="text-2xl font-semibold text-teal-700 mb-4">
          Global News
        </h2> <main>
        <NewsFeed /> {/* This renders the NewsFeed component */}
      </main>
      </section>

      {/* Find Your Cause Section */}
      <section className="p-6 bg-teal-50">
        <h2 className="text-2xl font-semibold text-teal-700 mb-4">
          Find Your Cause
        </h2>
        <div className="label-container flex justify-around mt-4">
          <label className="flex flex-col items-start">
            <span className="mb-2 text-teal-700">Question 1</span>
            <input
              type="text"
              className="input-field p-2 border border-teal-300 rounded-md"
              placeholder="Answer here..."
            />
          </label>
          <label className="flex flex-col items-start">
            <span className="mb-2 text-teal-700">Question 2</span>
            <input
              type="text"
              className="input-field p-2 border border-teal-300 rounded-md"
              placeholder="Answer here..."
            />
          </label>
          <label className="flex flex-col items-start">
            <span className="mb-2 text-teal-700">Question 3</span>
            <input
              type="text"
              className="input-field p-2 border border-teal-300 rounded-md"
              placeholder="Answer here..."
            />
          </label>
        </div>
      </section>

      {/* Explore Section */}
      <section className="p-6">
        <h2 className="text-2xl font-semibold text-teal-700 mb-4">Explore</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-md shadow-md">
            Charity Placeholder 1
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            Charity Placeholder 2
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            Charity Placeholder 3
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
