import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-8">

        <h1 className="text-4xl font-bold text-center text-yellow-500">About NomYumm</h1>

        <p className="text-lg text-center text-gray-700">
          NomYumm is a place for people who love food and love trying something new. Whether you're a beginner in the kitchen or someone who just wants inspiration for your next meal, we’ve got something for you.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="bg-yellow-50 p-6 rounded-xl shadow-sm" data-aos="zoom-in">
            <h2 className="text-xl font-semibold text-yellow-600 mb-2">Explore Recipes from Around the World</h2>
            <p className="text-gray-700">From Japanese ramen to Italian pasta, discover meals from different countries and cultures — all in one place.</p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-xl shadow-sm" data-aos="zoom-in">
            <h2 className="text-xl font-semibold text-yellow-600 mb-2">Search for What You Crave</h2>
            <p className="text-gray-700">Know what you’re looking for? Just type in the name of the dish, and we’ll help you find it.</p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-xl shadow-sm"  data-aos="zoom-in">
            <h2 className="text-xl font-semibold text-yellow-600 mb-2">Feeling Adventurous?</h2>
            <p className="text-gray-700">Hit the “Surprise Me” button and let us randomly choose a recipe for you. It’s a fun way to discover something unexpected!</p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-xl shadow-sm"  data-aos="zoom-in">
            <h2 className="text-xl font-semibold text-yellow-600 mb-2">Easy to Follow</h2>
            <p className="text-gray-700">Every recipe comes with simple instructions and ingredients, so you don’t feel lost while cooking.</p>
          </div>
        </div>

        <div className="text-center pt-8">
          <p className="text-md text-gray-600">
            Thanks for checking out NomYumm. We hope it helps you cook something tasty today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;